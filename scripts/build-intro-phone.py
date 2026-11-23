"""Reproducible Blender staging of the user-supplied video, 00:00–00:03.
Reuses assets/phone/dopafit-phone.glb, originally exported from kiosk.blend.
Only phone pose is reconstructed; all measurements/angles are manual estimates.
Export a tiny animation-only GLB so the existing phone mesh stays shared/cached.
"""
import bpy, math, json
from pathlib import Path
from mathutils import Vector, Quaternion
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'assets/intro'
OUT.mkdir(exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene;scene.render.fps=30;scene.frame_start=0;scene.frame_end=90
# time, phone upper edge in the 624x352 video crop, upper-edge width,
# upper-edge midpoint x, estimated pitch/yaw/roll in degrees.
KEYS=[
 [0,80,170,316,-27,-3,-1], [.25,78,183,317,-23,-2,-1],
 [.5,80,202,320,-20,0,-.5], [.75,87,220,323,-17,1.5,-.3],
 [1,99,238,324,-15,2,-.2], [1.25,109,247,324,-14,2.5,-.4],
 [1.5,112,249,324,-14,3,-.8], [2,111,250,324,-13.5,2,-1],
 [2.167,120,254,324,-13,1,-2], [2.333,132,263,324,-12,0,-3],
 [2.5,171,279,324,-12,-2,-3], [2.667,352,330,324,-16,-5,-3],
 [2.833,460,330,324,-16,-5,-3], [3,480,330,324,-16,-5,-3]
]
# Monotone Hermite interpolation reused from phone/reference-motion.js slope/sample.
def slope(i,col):
 if i==0:return (KEYS[1][col]-KEYS[0][col])/(KEYS[1][0]-KEYS[0][0])
 if i==len(KEYS)-1:return 0
 a=(KEYS[i][col]-KEYS[i-1][col])/(KEYS[i][0]-KEYS[i-1][0]);b=(KEYS[i+1][col]-KEYS[i][col])/(KEYS[i+1][0]-KEYS[i][0])
 return 0 if a*b<=0 else 2*a*b/(a+b)
def sample(t):
 i=0
 while i<len(KEYS)-2 and t>KEYS[i+1][0]:i+=1
 a,b=KEYS[i:i+2];span=b[0]-a[0];u=(t-a[0])/span
 return [(2*u**3-3*u*u+1)*a[c]+(u**3-2*u*u+u)*span*slope(i,c)+(-2*u**3+3*u*u)*b[c]+(u**3-u*u)*span*slope(i+1,c) for c in range(1,7)]
# Solve projection of the existing phone's top front corners against each crop.
# Phone dimensions are the same normalized kiosk mesh bounds used by reference-motion.js.
# User framing correction: enlarge the phone at every key, preserving its top
# edge/centre and pitch. This is fixed framing, not an added zoom animation.
FRAMING_ZOOM=1.30
D=5.1;FY=1/math.tan(math.radians(27)/2);FX=FY/(624/352)
def pose(t):
 top,width,cx,pitch,_legacy_yaw,_legacy_roll=sample(t)
 width*=FRAMING_ZOOM
 # Video review: the phone faces centrally with a level upper edge. The old
 # manually guessed yaw/roll introduced a sideways lean absent from this shot.
 # Retain its source pitch and framing; use a neutral lateral orientation.
 q=Quaternion((1,0,0),math.radians(pitch)) @ Quaternion((0,1,0),math.pi)
 def project(rotation):
  a=rotation@Vector((-.4851,1,-.08367));b=rotation@Vector((.4851,1,-.08367))
  lo,hi=.1,8
  for _ in range(40):
   s=(lo+hi)/2
   ia,ib=1/(D-s*a.z),1/(D-s*b.z)
   tx=((2*cx/624-1)*2/FX-s*(a.x*ia+b.x*ib))/(ia+ib)
   projected=abs(FX*((s*b.x+tx)*ib-(s*a.x+tx)*ia))/2
   if projected<width/624:lo=s
   else:hi=s
  s=(lo+hi)/2;ia,ib=1/(D-s*a.z),1/(D-s*b.z)
  x=((2*cx/624-1)*2/FX-s*(a.x*ia+b.x*ib))/(ia+ib)
  y=((1-2*top/352)*2/FY-s*(a.y*ia+b.y*ib))/(ia+ib)
  # Aspect-correct image coordinates; camera-space Y points upward.
  xa,xb=FX*(s*a.x+x)*ia*624,FX*(s*b.x+x)*ib*624
  ya,yb=FY*(s*a.y+y)*ia*352,FY*(s*b.y+y)*ib*352
  angle=math.atan((yb-ya)/(xb-xa))
  return x,y,s,angle
 x,y,s,_=project(q)
 # glTF(X,Y,Z) -> Blender(X,-Z,Y), including quaternion axes.
 qb=Quaternion((q.w,q.x,-q.z,q.y))
 return (x,0,y),qb,s
root=bpy.data.objects.new('Intro_Reference_Phone',None);bpy.context.collection.objects.link(root);root.rotation_mode='QUATERNION'
for f in range(91):
 root.location,root.rotation_quaternion,s=pose(f/30);root.scale=(s,s,s)
 for data in ['location','rotation_quaternion','scale']:root.keyframe_insert(data,frame=f)
root.animation_data.action.name='Video_00_to_03_Phone_Pose'
for curve in root.animation_data.action.fcurves:
 for key in curve.keyframe_points:key.interpolation='LINEAR'
scene.frame_set(0)
# Export just this animated empty. Attach the shared phone resource at runtime.
root.select_set(True);bpy.context.view_layer.objects.active=root
bpy.ops.export_scene.gltf(filepath=str(OUT/'phone-motion.glb'),export_format='GLB',use_selection=True,export_animations=True,export_frame_range=True,export_force_sampling=True,export_cameras=False,export_lights=False)
root.select_set(False)
bpy.ops.import_scene.gltf(filepath=str(ROOT/'assets/phone/dopafit-phone.glb'))
phones=[o for o in bpy.context.selected_objects if o.type=='MESH']
bounds=[o.matrix_world@Vector(v) for o in phones for v in o.bound_box]
center=Vector(tuple((min(v[i] for v in bounds)+max(v[i] for v in bounds))/2 for i in range(3)))
for phone in phones:phone.location-=center;phone.parent=root
# User's native detail UI, with the authorized matching hammer-curls content.
for mat in bpy.data.materials:
 if mat.name=='Dopafit_Workout_Screen':
  mat.use_nodes=True;n=mat.node_tree.nodes;n.clear();image=n.new('ShaderNodeTexImage');image.image=bpy.data.images.load(str(OUT/'exercise-poster.png'));image.image.pack();mat['runtime_video']='assets/intro/hammer-curls.mp4';em=n.new('ShaderNodeEmission');out=n.new('ShaderNodeOutputMaterial');mat.node_tree.links.new(image.outputs['Color'],em.inputs['Color']);mat.node_tree.links.new(em.outputs[0],out.inputs['Surface'])
 if mat.name in ['17ProMax_Black2.003','17ProMax_2112.002','17ProMax_Lens2.002']:
  mat.use_nodes=True;n=mat.node_tree.nodes;n.clear();em=n.new('ShaderNodeEmission');em.inputs['Color'].default_value=(0,0,0,1);out=n.new('ShaderNodeOutputMaterial');mat.node_tree.links.new(em.outputs[0],out.inputs['Surface'])
# Exact clean island capsule used by the existing web phone, mapped to Blender axes.
verts=[]
for cx,start in [(.1125-.041,-90),(-.1125+.041,90)]:
 for i in range(33):
  a=math.radians(start+i*180/32);verts.append((.002+cx+.041*math.cos(a),.088,.908+.041*math.sin(a)))
mesh=bpy.data.meshes.new('Clean island capsule');mesh.from_pydata(verts,[],[list(range(len(verts)))]);mesh.update()
island=bpy.data.objects.new('Clean_Dynamic_Island',mesh);bpy.context.collection.objects.link(island);island.parent=root
mat=bpy.data.materials.new('Island opaque black');mat.diffuse_color=(0,0,0,1);mat.use_nodes=True;mat.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value=(0,0,0,1);mat.node_tree.nodes.get('Principled BSDF').inputs['Roughness'].default_value=1;island.data.materials.append(mat)
# Perspective camera matching the runtime (vertical 27deg), framed to 624:352 crop.
bpy.ops.object.camera_add(location=(0,-D,0));camera=bpy.context.object;camera.name='Reference_video_camera'
camera.rotation_euler=(Vector((0,0,0))-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.sensor_fit='VERTICAL';camera.data.sensor_height=32;camera.data.lens=32/(2*math.tan(math.radians(27)/2));scene.camera=camera
for xyz,energy,size in [((3,-5,4),850,4),((-3,-3,1),650,3),((0,3,-3),450,3)]:
 bpy.ops.object.light_add(type='AREA',location=xyz);lamp=bpy.context.object;lamp.data.energy=energy;lamp.data.shape='DISK';lamp.data.size=size;lamp.rotation_euler=(-lamp.location).to_track_quat('-Z','Y').to_euler()
scene.world.color=(.08,.08,.08);scene.render.engine='BLENDER_EEVEE';scene.render.film_transparent=True
# Extend the preview film downward, exactly like runtime camera.setViewOffset.
# Retain the original top edge and pixel scale, expose the formerly cropped base.
camera.data.lens/=2;camera.data.shift_y=-.25
scene.render.resolution_x,scene.render.resolution_y=1248,1408;scene.render.resolution_percentage=100
scene.frame_set(45);bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'dopafit-intro.blend'))
scene.render.filepath=str(OUT/'phone-poster-settled.png');bpy.ops.render.render(write_still=True)
scene.frame_set(0);scene.render.filepath=str(OUT/'phone-poster.png');bpy.ops.render.render(write_still=True)
(OUT/'video-pose-keys.json').write_text(json.dumps({'reference_crop':[48,55,624,352],'duration':3,'fps':30,'columns':['seconds','top_px','upper_width_px','upper_mid_x_px','pitch_deg','yaw_deg','roll_deg'],'manually_estimated':True,'projected_upper_edge_deg':0,'screen_level_correction':True,'framing_zoom':FRAMING_ZOOM,'legacy_yaw_roll_columns_ignored':True,'keys':KEYS},indent=2)+'\n')
