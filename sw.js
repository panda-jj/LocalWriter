const V='lw-v20',F=['./','index.html','manifest.json','icon.svg','icon-192.png','icon-512.png'],FN=['fonts/lato-400.woff2','fonts/lato-700.woff2','fonts/tinos-400.woff2','fonts/tinos-700.woff2','fonts/merriweather-400.woff2','fonts/merriweather-700.woff2'],WAIT=2000;
const rq=u=>new Request(u,{cache:'reload'});
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(async c=>{await c.addAll(F.map(rq));await Promise.all(FN.map(u=>c.add(rq(u)).catch(()=>{})))}).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
/* Jaringan dulu supaya update langsung terpakai, tapi kalau lebih dari WAIT ms (sinyal lemah) atau offline, pakai cache. */
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
const net=fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(V).then(h=>h.put(e.request,c))}return r});
const hit=()=>caches.match(e.request,{ignoreSearch:true});
e.respondWith(new Promise(res=>{const t=setTimeout(()=>hit().then(c=>{if(c)res(c)}),WAIT);
net.then(r=>{clearTimeout(t);res(r)},()=>{clearTimeout(t);hit().then(c=>res(c||Response.error()))})}));
e.waitUntil(net.catch(()=>{}))});
