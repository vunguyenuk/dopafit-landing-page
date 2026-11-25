"""Replace only embedded month label artwork in the existing Blender export.
Geometry, node transforms, skinning, shape keys and animation bytes stay exact.
"""
from pathlib import Path
import copy,hashlib,json,struct
root=Path(__file__).resolve().parents[1]
source=root/'assets/calendar/dopafit-calendar.glb'
raw=source.read_bytes();json_size=struct.unpack_from('<I',raw,12)[0]
data=json.loads(raw[20:20+json_size]);before=copy.deepcopy(data);binary=raw[28+json_size:]
replacement={image['bufferView']:(root/f"assets/en/calendar-month-{3-i}.webp").read_bytes() for i,image in enumerate(data['images'])}
output=bytearray();checks=[]
for i,view in enumerate(data['bufferViews']):
 original=binary[view.get('byteOffset',0):view.get('byteOffset',0)+view['byteLength']]
 payload=replacement.get(i,original)
 while len(output)%4:output.append(0)
 view['byteOffset']=len(output);view['byteLength']=len(payload);output.extend(payload)
 if i not in replacement:checks.append(hashlib.sha256(payload).hexdigest()==hashlib.sha256(original).hexdigest())
data['buffers'][0]['byteLength']=len(output)
while len(output)%4:output.append(0)
header=json.dumps(data,separators=(',',':')).encode();header+=b' '*((-len(header))%4)
assert all(checks)
assert data['nodes']==before['nodes'] and data['animations']==before['animations'] and data['meshes']==before['meshes']
result=struct.pack('<III',0x46546c67,2,28+len(header)+len(output))+struct.pack('<II',len(header),0x4e4f534a)+header+struct.pack('<II',len(output),0x004e4942)+output
(root/'assets/en/dopafit-calendar.glb').write_bytes(result)
(root/'_reference/english-2026-11-25/calendar-integrity.json').write_text(json.dumps({'source':str(source.relative_to(root)),'output':'assets/en/dopafit-calendar.glb','unchangedNonImageBuffers':len(checks),'allBufferHashesMatch':all(checks),'nodeTransformsUnchanged':True,'meshesAndShapeKeysUnchanged':True,'animationsUnchanged':True},indent=2))
print('Calendar:',len(result),'bytes;',len(checks),'non-image buffer hashes unchanged')
