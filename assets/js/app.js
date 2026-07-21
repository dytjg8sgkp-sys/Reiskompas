
document.addEventListener('DOMContentLoaded',async()=>{
const vertrek=new Date('2026-07-03T08:00:00');
days.textContent=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
const m=await (await fetch('assets/data/modules.json')).json();
count.textContent=m.length;
modules.innerHTML=m.map(x=>`<a class="tile"><div class="icon">${x.icon}</div><b>${x.name}</b><div>${x.desc}</div></a>`).join('');
});
