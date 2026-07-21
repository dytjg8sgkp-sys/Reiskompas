
async function init(){
 const d=await (await fetch('assets/data/app.json')).json();
 const saved=JSON.parse(localStorage.getItem('rk77')||'{}');
 packing.innerHTML='';
 d.packing.forEach((item,i)=>{
   const label=document.createElement('label');
   label.className='check';
   const cb=document.createElement('input');
   cb.type='checkbox';
   cb.checked=!!saved[i];
   cb.onchange=()=>{saved[i]=cb.checked;localStorage.setItem('rk77',JSON.stringify(saved));};
   label.append(cb,document.createTextNode(' '+item));
   packing.appendChild(label);
 });
 route.innerHTML=d.stops.map(s=>`<li><strong>${s.naam}</strong> – ${s.afstand}</li>`).join('');
 fav.innerHTML=d.favorites.map(x=>'<li>'+x+'</li>').join('');
}
window.onload=init;
