if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js').catch(()=>{});}
const c=document.getElementById('count');
if(c){const d=Math.floor((new Date('2026-07-01')-new Date())/86400000);c.textContent='Nog '+Math.max(d,0)+' dagen';}
function saveFav(name){let f=JSON.parse(localStorage.getItem('fav')||'[]');if(!f.includes(name))f.push(name);localStorage.setItem('fav',JSON.stringify(f));alert('Opgeslagen');}
