
const vertrek=new Date('2026-07-01T08:00:00');
const d=Math.max(0,Math.floor((vertrek-new Date())/86400000));
const el=document.getElementById('count');
if(el) el.textContent='Nog '+d+' dagen';
async function loadTrips(){
 const target=document.getElementById('triplist');
 if(!target) return;
 const r=await fetch('../assets/data/dagtrips.json');
 const data=await r.json();
 target.innerHTML=data.map(x=>`<li>${x.naam} - ${x.afstand}</li>`).join('');
}
window.addEventListener('load',loadTrips);
