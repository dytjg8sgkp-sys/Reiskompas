
async function init(){
 const d=await (await fetch('assets/data/map.json')).json();
 const map=document.getElementById('campmap');
 d.cells.forEach(c=>{
   const div=document.createElement('div');
   div.className='cell';
   div.textContent=c;
   div.onclick=()=>alert(c);
   map.appendChild(div);
 });
}
window.onload=init;
