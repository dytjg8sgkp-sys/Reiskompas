
document.addEventListener('DOMContentLoaded', async ()=>{
 const vertrek=new Date('2026-07-03T08:00:00');
 document.getElementById('days').textContent=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
 const mods=await (await fetch('assets/data/modules.json')).json();
 document.getElementById('mods').innerHTML=mods.map(m=>`<a class="tile"><div class="icon">${m.icon}</div><strong>${m.name}</strong><br><small>${m.info}</small></a>`).join('');
});
