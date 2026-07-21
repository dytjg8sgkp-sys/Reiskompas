function page(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
const d=new Date('2026-08-02');const now=new Date();document.getElementById('count').textContent='Nog '+Math.max(0,Math.ceil((d-now)/86400000))+' dagen';
const ol=document.getElementById('days');for(let i=1;i<=14;i++){const li=document.createElement('li');li.textContent='Dag '+i+' - planning';ol.appendChild(li);}
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}