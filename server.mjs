import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const mime={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8'};
createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;const name=path==='/'?'index.html':path.slice(1);if(!/^[a-zA-Z0-9.-]+$/.test(name))throw Error();const body=await readFile(fileURLToPath(new URL('./dist/'+name,import.meta.url)));res.writeHead(200,{'Content-Type':mime[name.split('.').pop()]||'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
