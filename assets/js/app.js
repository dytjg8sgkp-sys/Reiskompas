async function loadTrips(){
const ul=document.getElementById('trips'); if(!ul)return;
const data=await (await fetch('../assets/data/dagtrips.json')).json();
const q=(document.getElementById('zoek')?.value||'').toLowerCase();
ul.innerHTML='';
data.filter(t=>t.naam.toLowerCase().includes(q)).forEach(t=>{
ul.innerHTML+=`<li>${t.naam} (${t.afstand})</li>`;
});
}
window.addEventListener('load',loadTrips);
