
const vertrek=new Date('2026-07-03T08:00:00');
document.addEventListener('DOMContentLoaded',async()=>{
 document.getElementById('days').textContent=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
 const mods=await (await fetch('assets/data/modules.json')).json();
 document.getElementById('moduleCount').textContent=mods.length;
 document.getElementById('grid').innerHTML=mods.map(m=>`<a class="tile" href="#"><div style="font-size:2rem">${m.icon}</div><strong>${m.name}</strong><br><small>${m.info}</small></a>`).join('');
});
