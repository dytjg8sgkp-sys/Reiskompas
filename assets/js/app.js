
const packing=['Paspoorten','Rijbewijs','Caravanpapieren','Laders','Zwemkleding','EHBO-set'];
function render(){
 const state=JSON.parse(localStorage.getItem('rk66_pack')||'[]');
 const ul=document.getElementById('packing');
 ul.innerHTML='';
 packing.forEach((item,i)=>{
   const li=document.createElement('li');
   const cb=document.createElement('input');
   cb.type='checkbox';
   cb.checked=!!state[i];
   cb.onchange=()=>{state[i]=cb.checked;localStorage.setItem('rk66_pack',JSON.stringify(state));render();}
   li.append(cb,document.createTextNode(' '+item));
   if(cb.checked)li.className='done';
   ul.appendChild(li);
 });
 document.getElementById('progress').textContent=state.filter(Boolean).length+' / '+packing.length+' ingepakt';
}
window.onload=render;
