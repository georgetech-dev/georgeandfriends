// Never cache API data, admin/customer records or authenticated site responses.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||event.request.mode!=='navigate'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).catch(()=>new Response('<!doctype html><html lang="en"><meta name="viewport" content="width=device-width,initial-scale=1"><title>George and Friends</title><body style="margin:0;padding:40px 24px;background:#f8deed;color:#41274f;font:18px system-ui"><h1>A little pause in the paddock</h1><p>Please reconnect to the internet to visit George and Friends or send a booking request.</p><button onclick="location.reload()" style="padding:14px 24px;border:0;border-radius:12px;background:#633575;color:white;font:inherit">Try again</button></body></html>',{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})));
});
