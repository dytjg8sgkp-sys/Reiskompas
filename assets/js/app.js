
async function loadTrips(){
 const c=document.getElementById('tripContainer');
 if(!c) return;
 const data=await (await fetch('../assets/data/dagtrips.json')).json();
 c.innerHTML='';
 data.forEach(t=>{
  c.innerHTML+=`<div class="card">
  <h3>${t.naam}</h3>
  <p><b>Afstand:</b> ${t.afstand}<br><b>Duur:</b> ${t.duur}</p>
  <p>${t.tip}</p>
  <a class="btn" target="_blank" href="https://maps.apple.com/?q=${encodeURIComponent(t.naam)}">Open in Apple Maps</a>
  </div>`;
 });
}
window.addEventListener('load',loadTrips);
