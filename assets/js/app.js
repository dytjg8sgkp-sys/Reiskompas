
document.addEventListener('DOMContentLoaded',async()=>{
const vertrek=new Date('2026-07-03T08:00:00');
days.textContent=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
const data=await (await fetch('assets/data/modules.json')).json();
moduleCount.textContent=data.length;
mods.innerHTML=data.map(m=>`<a class="tile"><h3>${m.icon} ${m.name}</h3><small>${m.desc}</small></a>`).join('');
});
