
async function init(){
 const d=await (await fetch('assets/data/trip.json')).json();
 document.getElementById('booking').innerHTML=
 `<strong>${d.booking.camping}</strong><br>
 Aankomst: ${d.booking.arrival}<br>
 Vertrek: ${d.booking.departure}<br>
 Referentie: ${d.booking.reference}`;
 document.getElementById('route').innerHTML=d.route.map(x=>'<li>'+x+'</li>').join('');
 document.getElementById('rests').innerHTML=d.favorites.restaurants.map(x=>'<li>'+x+'</li>').join('');
 document.getElementById('beaches').innerHTML=d.favorites.beaches.map(x=>'<li>'+x+'</li>').join('');
 const names=["Receptie","Zwembad","Restaurant","Supermarkt","Sanitair","Sport","Speeltuin","Jullie plaats"];
 const map=document.getElementById('map');
 names.forEach((n,i)=>{
   const div=document.createElement('div');
   div.className='tile'+(i===7?' active':'');
   div.textContent=n;
   map.appendChild(div);
 });
}
window.onload=init;
