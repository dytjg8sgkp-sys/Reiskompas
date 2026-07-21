
const vertrek=new Date('2026-07-03T08:00:00');
const dagen=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
document.addEventListener('DOMContentLoaded',()=>{
 const d=document.getElementById('days');
 if(d)d.textContent=dagen;
});
