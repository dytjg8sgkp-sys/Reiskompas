
async function init(){
 const d=await (await fetch('assets/data/app.json')).json();
 restaurants.innerHTML=d.restaurants.map(x=>'<li>'+x+'</li>').join('');
 beaches.innerHTML=d.beaches.map(x=>'<li>'+x+'</li>').join('');
 itinerary.innerHTML=d.days.map(x=>`<tr><td>${x.day}</td><td>${x.plan}</td></tr>`).join('');
}
window.onload=init;
