
const pages=document.querySelectorAll('.page');
document.querySelectorAll('#tabs button').forEach(b=>{
 b.onclick=()=>{
   pages.forEach(p=>p.hidden=true);
   document.getElementById(b.dataset.p).hidden=false;
   document.querySelectorAll('#tabs button').forEach(x=>x.classList.remove('active'));
   b.classList.add('active');
 };
});
document.querySelector('#tabs button').click();
const d=Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000));
countdown.textContent='Nog '+d+' dagen tot vertrek.';
savePlace.onclick=()=>{
 localStorage.setItem('campPlace',place.value);
 alert('Kampeerplaats opgeslagen');
};
const cp=localStorage.getItem('campPlace');
if(cp) place.value=cp;
