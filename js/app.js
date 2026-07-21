
function show(id){
 document.querySelectorAll('main section').forEach(s=>s.hidden=true);
 document.getElementById(id).hidden=false;
}
count.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';

fetch('data/days.json').then(r=>r.json()).then(data=>{
 const c=document.getElementById('days');
 data.forEach((d,i)=>{
   const note=localStorage.getItem('v91day'+i)||'';
   const div=document.createElement('div');
   div.className='card';
   div.innerHTML=`<b>${d.date} - Dag ${d.day}</b><br>
   Activiteit: ${d.activity}<br>
   Restaurant: ${d.restaurant}<br>
   Strand: ${d.beach}<br>
   <textarea data-i="${i}">${note}</textarea>`;
   c.appendChild(div);
 });
});
document.addEventListener('input',e=>{
 if(e.target.dataset.i!==undefined){
   localStorage.setItem('v91day'+e.target.dataset.i,e.target.value);
 }
});
dark.checked=localStorage.getItem('dark')==='1';
if(dark.checked)document.body.classList.add('dark');
dark.onchange=()=>{
 localStorage.setItem('dark',dark.checked?'1':'0');
 document.body.classList.toggle('dark',dark.checked);
};
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
