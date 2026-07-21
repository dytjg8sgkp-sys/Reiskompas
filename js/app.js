function savePlace(){const p=plaats.value.trim();if(!p)return;localStorage.setItem('campPlace',p);saved.textContent=p;}
function setDest(d){dest.textContent=d;localStorage.setItem('destination',d);}
window.onload=()=>{saved.textContent=localStorage.getItem('campPlace')||'Nog niet ingesteld';plaats.value=localStorage.getItem('campPlace')||'';dest.textContent=localStorage.getItem('destination')||'Nog geen';}
