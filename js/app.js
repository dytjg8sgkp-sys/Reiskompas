let scale=1;
const frame=document.getElementById('map');
function zoom(delta){
 scale=Math.min(2,Math.max(.5,scale+delta));
 frame.style.transform='scale('+scale+')';
 zoomtxt.textContent=Math.round(scale*100)+'%';
}
place.value=localStorage.getItem('campPlace')||'';
destination.textContent=localStorage.getItem('destination')||'Nog geen';
save.onclick=()=>localStorage.setItem('campPlace',place.value);
document.querySelectorAll('[data-name]').forEach(b=>b.onclick=()=>{destination.textContent=b.dataset.name;localStorage.setItem('destination',b.dataset.name);});
['tow','docs','fridge'].forEach(id=>{
 const e=document.getElementById(id);
 e.checked=localStorage.getItem(id)==='1';
 e.onchange=()=>localStorage.setItem(id,e.checked?'1':'0');
});
