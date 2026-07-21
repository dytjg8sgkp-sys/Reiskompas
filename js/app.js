function show(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
cd.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';
for(let i=1;i<=14;i++){let li=document.createElement('li');li.textContent='Dag '+i+' - planning';days.appendChild(li);}
fetch('data/documents.json').then(r=>r.json()).then(d=>{
 d.forEach(x=>{
   let div=document.createElement('div');
   div.innerHTML='<b>'+x.name+'</b> - '+x.status;
   if(x.file){div.innerHTML+='<br><a href="'+x.file+'" target="_blank">📄 Open PDF</a>';}
   doclist.appendChild(div);
 });
});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
