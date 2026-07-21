function show(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
count.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';
fetch('data/calendar.json').then(r=>r.json()).then(data=>{
 const c=document.getElementById('days');
 data.forEach((d,i)=>{
  const val=localStorage.getItem('daynote'+i)||'';
  const div=document.createElement('div');
  div.className='card';
  div.innerHTML='<b>'+d.date+' - '+d.title+'</b><br><textarea data-i="'+i+'">'+val+'</textarea>';
  c.appendChild(div);
 });
});
document.addEventListener('input',e=>{
 if(e.target.dataset.i!==undefined){localStorage.setItem('daynote'+e.target.dataset.i,e.target.value);}
});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}