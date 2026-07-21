async function init(){
const d=await (await fetch('assets/data/trip.json')).json();
const b=d.booking;
info.innerHTML=`<table>
<tr><td>Camping</td><td>${b.camping}</td></tr>
<tr><td>Type</td><td>${b.type}</td></tr>
<tr><td>Aankomst</td><td>${b.arrival}</td></tr>
<tr><td>Vertrek</td><td>${b.departure}</td></tr>
<tr><td>Nachten</td><td>${b.nights}</td></tr>
<tr><td>Referentie</td><td>${b.reference}</td></tr>
<tr><td>Totaal</td><td>${b.price}</td></tr>
<tr><td>Telefoon</td><td>${b.phone}</td></tr>
</table>`;
plan.innerHTML=d.planning.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join('');
}
window.onload=init;