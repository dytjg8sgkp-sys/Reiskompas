
function applyTheme(){
 const t=localStorage.getItem('theme')||'dark';
 document.body.classList.toggle('light',t==='light');
}
function toggleTheme(){
 const cur=localStorage.getItem('theme')||'dark';
 localStorage.setItem('theme',cur==='dark'?'light':'dark');
 applyTheme();
}
function searchModules(){
 const q=(document.getElementById('search').value||'').toLowerCase();
 document.querySelectorAll('.tile').forEach(t=>{
   t.style.display=t.textContent.toLowerCase().includes(q)?'block':'none';
 });
}
window.addEventListener('load',applyTheme);
