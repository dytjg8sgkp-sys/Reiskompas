
place.value=localStorage.getItem('campPlace')||'';
dest.textContent=localStorage.getItem('destination')||'-';
save.onclick=()=>{localStorage.setItem('campPlace',place.value);alert('Kampeerplaats opgeslagen');};
document.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{dest.textContent=b.dataset.d;localStorage.setItem('destination',b.dataset.d);});
