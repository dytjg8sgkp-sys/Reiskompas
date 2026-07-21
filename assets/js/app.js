
async function loadDashboard(){
 const c=document.getElementById('modules');
 if(!c) return;
 const data=await (await fetch('assets/data/modules.json')).json();
 c.innerHTML=data.map(m=>`<a class="tile" href="pages/${m.page}">${m.icon}<br><strong>${m.name}</strong></a>`).join('');
 document.getElementById('count').textContent=data.length;
}
window.addEventListener('load',loadDashboard);
