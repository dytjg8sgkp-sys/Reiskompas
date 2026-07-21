
async function init(){
 const m=await (await fetch('assets/data/modules.json')).json();
 modules.innerHTML=m.map(x=>`<div class='card'><h3>${x.icon} ${x.name}</h3></div>`).join('');
 notes.value=localStorage.getItem('notes')||'';
 notes.oninput=()=>localStorage.setItem('notes',notes.value);
 budget.value=localStorage.getItem('budget')||'';
 budget.oninput=()=>localStorage.setItem('budget',budget.value);
}
document.addEventListener('DOMContentLoaded',init);
