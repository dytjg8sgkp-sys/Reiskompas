
const activities=[
'Inchecken camping',
'Strand Playa Montroig',
'Barcelona bezoeken',
'PortAventura',
'Cambrils boulevard',
'Tarragona centrum'
];

function renderPlanner(){
 const state=JSON.parse(localStorage.getItem('rk67_plan')||'[]');
 const list=document.getElementById('planner');
 list.innerHTML='';
 activities.forEach((a,i)=>{
   const li=document.createElement('li');
   const cb=document.createElement('input');
   cb.type='checkbox';
   cb.checked=!!state[i];
   cb.onchange=()=>{
      state[i]=cb.checked;
      localStorage.setItem('rk67_plan',JSON.stringify(state));
      renderPlanner();
   };
   li.append(cb,document.createTextNode(a));
   if(cb.checked) li.className='done';
   list.appendChild(li);
 });
 document.getElementById('planprogress').textContent=
   state.filter(Boolean).length+' / '+activities.length+' activiteiten voltooid';
}
window.onload=renderPlanner;
