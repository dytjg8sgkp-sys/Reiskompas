
async function init(){
 const d=await (await fetch('assets/data/trip.json')).json();
 route.innerHTML=d.route.map(x=>'<li>'+x+'</li>').join('');
 days.innerHTML=d.days.map(x=>'<li>'+x+'</li>').join('');
 fav.innerHTML=d.favorites.map(x=>'<li>'+x+'</li>').join('');
}
document.addEventListener('DOMContentLoaded',init);
