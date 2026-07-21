
const vertrek=new Date('2026-07-03T08:00:00');
document.addEventListener('DOMContentLoaded', async ()=>{
 const d=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
 document.getElementById('days').textContent=d;
 const data=await (await fetch('assets/data/modules.json')).json();
 document.getElementById('grid').innerHTML=data.map(m=>`
 <a class="tile" href="#">
 <div class="icon">${m.icon}</div>
 <strong>${m.name}</strong>
 <div class="sub">${m.desc}</div>
 </a>`).join('');
});
