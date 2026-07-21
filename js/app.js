function show(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
count.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';

const days=document.getElementById('days');
for(let i=1;i<=14;i++){
 let t=localStorage.getItem('day'+i)||'';
 let d=document.createElement('div');
 d.className='card';
 d.innerHTML='<b>Dag '+i+'</b><br><textarea data-day="'+i+'" style="width:100%;height:70px">'+t+'</textarea>';
 days.appendChild(d);
}
document.addEventListener('input',e=>{
 if(e.target.dataset.day){localStorage.setItem('day'+e.target.dataset.day,e.target.value);}
 if(e.target.id==='memo'){localStorage.setItem('memo',memo.value);}
});

fetch('data/checklist.json').then(r=>r.json()).then(items=>{
 const list=document.getElementById('list');
 let done=0;
 items.forEach((txt,i)=>{
   const l=document.createElement('label');
   const c=document.createElement('input');
   c.type='checkbox';
   c.checked=localStorage.getItem('chk'+i)==='1';
   if(c.checked)done++;
   c.onchange=()=>{
      localStorage.setItem('chk'+i,c.checked?'1':'0');
      location.reload();
   };
   l.appendChild(c); l.append(' '+txt); list.appendChild(l);
 });
 progress.value=done;
 progressText.textContent=done+' / '+items.length+' gereed';
});

memo.value=localStorage.getItem('memo')||'';

function renderFav(){
 const ul=favList; ul.innerHTML='';
 JSON.parse(localStorage.getItem('favs')||'[]').forEach(f=>{
   let li=document.createElement('li');li.textContent=f;ul.appendChild(li);
 });
}
function addFav(){
 let arr=JSON.parse(localStorage.getItem('favs')||'[]');
 if(favInput.value.trim()){arr.push(favInput.value.trim());localStorage.setItem('favs',JSON.stringify(arr));favInput.value='';renderFav();}
}
renderFav();

if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
