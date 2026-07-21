
async function init(){
 const d=await (await fetch('assets/data/app.json')).json();
 summary.innerHTML=`<span class='badge'>${d.trip.camping}</span><p><strong>Aankomst:</strong> ${d.trip.arrival}<br><strong>Vertrek:</strong> ${d.trip.departure}<br><strong>Hotel onderweg:</strong> ${d.trip.hotel}<br><strong>Referentie:</strong> ${d.trip.reference}</p>`;
 planning.innerHTML=d.days.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join('');
 documents.innerHTML=d.docs.map(x=>'<li>'+x+'</li>').join('');
}
window.onload=init;
