
document.addEventListener('DOMContentLoaded',async()=>{
const vertrek=new Date('2026-07-03T08:00:00');
days.textContent=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
const m=await (await fetch('assets/data/modules.json')).json();
moduleCount.textContent=m.length;
mods.innerHTML=m.map(x=>`<a class="tile"><h3>${x.icon} ${x.name}</h3><small>${x.desc}</small></a>`).join('');
});
