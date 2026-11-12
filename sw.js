const V='lw-v14',F=['./','index.html','manifest.json','icon.svg','icon-192.png','icon-512.png'],FN=['fonts/lato-400.woff2','fonts/lato-700.woff2','fonts/tinos-400.woff2','fonts/tinos-700.woff2','fonts/merriweather-400.woff2','fonts/merriweather-700.woff2'];
const rq=u=>new Request(u,{cache:'reload'});
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(async c=>{await c.addAll(F.map(rq));await Promise.all(FN.map(u=>c.add(rq(u)).catch(()=>{})))}).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(V).then(h=>h.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
