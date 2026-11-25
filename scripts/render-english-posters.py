import bpy
from pathlib import Path
root=Path(__file__).resolve().parents[1]
bpy.ops.wm.open_mainfile(filepath=str(root/'assets/intro/dopafit-intro.blend'))
for mat in bpy.data.materials:
 if mat.use_nodes:
  for n in mat.node_tree.nodes:
   if n.type=='TEX_IMAGE' and n.image and ('exercise' in n.image.name.lower()):
    n.image=bpy.data.images.load(str(root/'_reference/english-2026-11-25/rendered/exercise-poster.png'))
scene=bpy.context.scene
print('CAMERA',scene.camera.name,'RES',scene.render.resolution_x,scene.render.resolution_y)
scene.render.resolution_percentage=100
for frame,name in [(0,'phone-poster'),(60,'phone-poster-settled')]:
 scene.frame_set(frame);scene.render.filepath=str(root/'_reference/english-2026-11-25/rendered'/f'{name}.png');bpy.ops.render.render(write_still=True)
