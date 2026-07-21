function show(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
count.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';
fetch('data/route.json').then(r=>r.json()).then(d=>{
rt.innerHTML='<tr><th>Van</th><th>Naar</th><th>Afstand</th><th>Tijd</th></tr>';
d.legs.forEach(x=>rt.innerHTML+=`<tr><td>${x.from}</td><td>${x.to}</td><td>${x.distance}</td><td>${x.time}</td></tr>`);
});
const list=['Paspoorten','Rijbewijs','Campingpapieren','Hotel','Kleding','Laders','Caravan','Koelkast'];
let done=0;
list.forEach((t,i)=>{let l=document.createElement('label');let c=document.createElement('input');c.type='checkbox';c.checked=localStorage.getItem('p'+i)=='1';if(c.checked)done++;c.onchange=()=>{localStorage.setItem('p'+i,c.checked?'1':'0');location.reload();};l.append(c,' '+t);items.appendChild(l);});
prog.value=done;progTxt.textContent=done+' van '+list.length+' taken afgerond';
if('serviceWorker'in navigator){navigator.serviceWorker.register('sw.js');}
