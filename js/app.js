
function show(id){
document.querySelectorAll('main section').forEach(s=>s.hidden=true);
document.getElementById(id).hidden=false;
}
count.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';

fetch('data/restaurants.json').then(r=>r.json()).then(data=>{
const ul=document.getElementById('restaurants');
data.forEach(x=>{
let li=document.createElement('li');
li.textContent=x.name+' ('+x.place+')';
ul.appendChild(li);
});
});

fetch('data/beaches.json').then(r=>r.json()).then(data=>{
const ul=document.getElementById('beaches');
data.forEach(x=>{
let li=document.createElement('li');
li.textContent=x.name;
ul.appendChild(li);
});
});

if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
