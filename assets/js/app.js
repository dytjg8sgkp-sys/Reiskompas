
async function init(){
 const d=await (await fetch('assets/data/app.json')).json();
 widgets.innerHTML=d.widgets.map(w=>`<div class='card widget'><strong>${w[0]}</strong><span>${w[1]}</span></div>`).join('');
 camp.innerHTML=d.places.map(p=>`<div>${p}</div>`).join('');
 rests.innerHTML=d.restaurants.map(r=>'<li>'+r+'</li>').join('');
 beaches.innerHTML=d.beaches.map(b=>'<li>'+b+'</li>').join('');
}
window.onload=init;
