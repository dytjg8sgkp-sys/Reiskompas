
async function init(){
 const p=await (await fetch('assets/data/places.json')).json();
 places.innerHTML=p.map(x=>`<li>${x.name} <small>(${x.type})</small></li>`).join('');
 notes.value=localStorage.getItem('rk_notes')||'';
 notes.oninput=()=>localStorage.setItem('rk_notes',notes.value);
 budget.value=localStorage.getItem('rk_budget')||'';
 budget.oninput=()=>localStorage.setItem('rk_budget',budget.value);
}
document.addEventListener('DOMContentLoaded',init);
