
async function loadChecklist(){
 const box=document.getElementById('checklist');
 if(!box) return;
 const items=await (await fetch('../assets/data/checklist.json')).json();
 const saved=JSON.parse(localStorage.getItem('rk_checklist')||'{}');
 box.innerHTML='';
 items.forEach((item,i)=>{
   const id='c'+i;
   box.innerHTML+=`<label><input id="${id}" type="checkbox" ${saved[item]?'checked':''}
   onchange="toggleItem('${item}',this.checked)"> ${item}</label>`;
 });
}
function toggleItem(name,val){
 const saved=JSON.parse(localStorage.getItem('rk_checklist')||'{}');
 saved[name]=val;
 localStorage.setItem('rk_checklist',JSON.stringify(saved));
}
function loadFavorites(){
 const el=document.getElementById('favorites');
 if(!el) return;
 const fav=JSON.parse(localStorage.getItem('favorites')||'[]');
 if(!fav.length){el.innerHTML='<div class="card">Nog geen favorieten opgeslagen.</div>';return;}
 el.innerHTML=fav.map(f=>`<div class="card">❤️ ${f}</div>`).join('');
}
window.addEventListener('load',()=>{loadChecklist();loadFavorites();});
