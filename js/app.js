function show(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
const d=new Date('2026-08-02');document.getElementById('count').textContent='Nog '+Math.max(0,Math.ceil((d-new Date())/86400000))+' dagen';
fetch('data/planning.json').then(r=>r.json()).then(data=>{const ul=document.getElementById('days');data.forEach(x=>{let li=document.createElement('li');li.textContent=x.title+' - '+x.activity;ul.appendChild(li);});});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}