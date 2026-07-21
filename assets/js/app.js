
async function loadRestaurants(){
 const list=document.getElementById('restaurants');
 if(!list) return;
 const data=await (await fetch('../assets/data/restaurants.json')).json();
 const q=(document.getElementById('zoek')?.value||'').toLowerCase();
 list.innerHTML='';
 data.filter(r=>Object.values(r).join(' ').toLowerCase().includes(q))
 .forEach(r=>{
   list.innerHTML+=`<div class="card"><b>${r.naam}</b><br>${r.plaats}<br>${r.keuken}
   <br><button onclick="saveFav('${r.naam}')">❤️ Favoriet</button></div>`;
 });
}
function saveFav(name){
 let f=JSON.parse(localStorage.getItem('favorites')||'[]');
 if(!f.includes(name)) f.push(name);
 localStorage.setItem('favorites',JSON.stringify(f));
 alert('Opgeslagen: '+name);
}
window.addEventListener('load',loadRestaurants);
