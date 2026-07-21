
async function loadReis(){
 const el=document.getElementById('reisdata');
 if(!el) return;
 const d=await (await fetch('../assets/data/reis.json')).json();
 el.innerHTML=`
 <div class="card"><strong>Route</strong><br>${d.start} → ${d.tussenstop} → ${d.eind}</div>
 <div class="card"><strong>Hotel</strong><br>${d.hotel}</div>
 <div class="card"><strong>Caravanstalling</strong><br>${d.stalling}</div>
 <div class="card"><strong>Tankstops</strong><ul>${d.tankstops.map(t=>'<li>'+t+'</li>').join('')}</ul></div>`;
}
window.addEventListener('load',loadReis);
