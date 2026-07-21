
function show(id){
document.querySelectorAll('main section').forEach(s=>s.hidden=true);
document.getElementById(id).hidden=false;
}

const vertrek=new Date('2026-08-02');
const nu=new Date();
document.getElementById('countdown').textContent=
'Nog '+Math.max(0,Math.ceil((vertrek-nu)/86400000))+' dagen tot vertrek';

const items=[
'Paspoorten',
'Rijbewijs',
'Campingpapieren',
'Hotelreservering',
'Kleding',
'Badkleding',
'Handdoeken',
'Laders',
'Koelkast vullen',
'Caravan controleren'
];

const div=document.getElementById('list');

items.forEach((t,i)=>{
const c=localStorage.getItem('item'+i)==='1';
const l=document.createElement('label');
const cb=document.createElement('input');
cb.type='checkbox';
cb.checked=c;
cb.onchange=()=>localStorage.setItem('item'+i,cb.checked?'1':'0');
l.appendChild(cb);
l.append(' '+t);
div.appendChild(l);
});

if('serviceWorker' in navigator){
navigator.serviceWorker.register('sw.js');
}
