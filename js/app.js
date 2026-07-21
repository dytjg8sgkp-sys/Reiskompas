
document.querySelectorAll('nav button').forEach(b=>{
 b.onclick=()=>{
  document.querySelectorAll('.page').forEach(p=>p.hidden=true);
  document.getElementById(b.dataset.page).hidden=false;
  document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
 };
});
document.querySelector('nav button').click();

const vertrek=new Date('2026-08-02');
const dagen=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
countdown.textContent=`Nog ${dagen} dagen tot vertrek`;

pitch.value=localStorage.getItem('pitch')||'';
pitchSaved.textContent=pitch.value?`Opgeslagen: ${pitch.value}`:'';
savePitch.onclick=()=>{
 localStorage.setItem('pitch',pitch.value);
 pitchSaved.textContent=`Opgeslagen: ${pitch.value}`;
};

plan.value=localStorage.getItem('plan24')||'';
plan.oninput=()=>localStorage.setItem('plan24',plan.value);

document.querySelectorAll('.chk').forEach(c=>{
 c.checked=localStorage.getItem(c.dataset.k)==='1';
 c.onchange=()=>localStorage.setItem(c.dataset.k,c.checked?'1':'0');
});
