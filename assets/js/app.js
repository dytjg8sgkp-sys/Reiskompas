
const items=[
'Paspoorten controleren',
'Caravan ophalen',
'Hotel La Jonquera',
'Vertrek naar Spanje',
'Aankomst Playa Montroig'
];
function render(){
 const ul=document.getElementById('checklist');
 const state=JSON.parse(localStorage.getItem('rk61')||'[]');
 ul.innerHTML='';
 items.forEach((t,i)=>{
   const li=document.createElement('li');
   const cb=document.createElement('input');
   cb.type='checkbox';
   cb.checked=!!state[i];
   cb.onchange=()=>{state[i]=cb.checked;localStorage.setItem('rk61',JSON.stringify(state));render();}
   li.append(cb,document.createTextNode(' '+t));
   if(cb.checked) li.className='done';
   ul.appendChild(li);
 });
 const done=state.filter(Boolean).length;
 document.getElementById('progress').textContent=`${done}/${items.length} afgerond`;
}
window.onload=render;
