
async function init(){
 const d=await (await fetch('assets/data/app.json')).json();
 summary.innerHTML=`<strong>${d.trip.camping}</strong><br>${d.trip.arrival} t/m ${d.trip.departure}<br>Overnachting: ${d.trip.hotel}`;
 route.innerHTML=d.route.map(r=>`<div class="route-step">${r[0]} ${r[1]}</div>`).join('');
 checks.innerHTML=d.checklist.map(c=>`<label><input type="checkbox"> ${c}</label><br>`).join('');
}
window.onload=init;
