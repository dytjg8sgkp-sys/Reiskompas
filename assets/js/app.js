
async function loadPlanning(){
 const el=document.getElementById('planning');
 if(!el)return;
 const data=await (await fetch('../assets/data/planning.json')).json();
 el.innerHTML='';
 data.forEach(item=>{
   el.innerHTML+=`<div class="card"><strong>${item.dag}</strong><br>${item.activiteit}</div>`;
 });
}
window.addEventListener('load',()=>{
 const c=document.getElementById('countdown');
 if(c){
   const vertrek=new Date('2026-07-01T08:00:00');
   const dagen=Math.max(0,Math.floor((vertrek-new Date())/86400000));
   c.textContent=`Nog ${dagen} dagen tot vertrek`;
 }
 loadPlanning();
});
