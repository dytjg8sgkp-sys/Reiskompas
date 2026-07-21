const pages=document.querySelectorAll('.page');
document.querySelectorAll('nav button').forEach(b=>{
 b.onclick=()=>{pages.forEach(p=>p.hidden=true);document.getElementById(b.dataset.page).hidden=false;
 document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');};
});
document.querySelector('nav button').click();
save.onclick=()=>{localStorage.place=place.value;saved.textContent='Opgeslagen: '+place.value;}
place.value=localStorage.place||'';saved.textContent=place.value?'Opgeslagen: '+place.value:'';
notes.value=localStorage.notes21||'';
notes.oninput=()=>localStorage.notes21=notes.value;
