function show(id){document.querySelectorAll('section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
const d=new Date('2026-08-02');count.textContent='Nog '+Math.max(0,Math.ceil((d-new Date())/86400000))+' dagen';
fetch('data/booking.json').then(r=>r.json()).then(b=>{
bookingCard.innerHTML=`<b>${b.camping}</b><br>${b.accommodation}<br>${b.arrival} t/m ${b.departure}<br>${b.nights} nachten<br>Hotel: ${b.hotel}`;
});
memo.value=localStorage.getItem('memo')||'';
memo.oninput=()=>localStorage.setItem('memo',memo.value);
const done=['memo'].filter(k=>localStorage.getItem(k)).length;prog.value=done;
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
