
async function loadCamping(){
 const t=document.getElementById('camping');
 if(!t) return;
 const d=await (await fetch('../assets/data/camping.json')).json();
 t.innerHTML=`
 <div class='card'><b>${d.naam}</b></div>
 <div class='card'><b>Faciliteiten</b><ul>${d.faciliteiten.map(x=>`<li>${x}</li>`).join('')}</ul></div>
 <div class='card'><b>Restaurants</b><ul>${d.restaurants.map(x=>`<li>${x}</li>`).join('')}</ul></div>
 <div class='card'><b>Populaire dagtrips</b><ul>${d.dagtrips.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
}
window.addEventListener('load',loadCamping);
