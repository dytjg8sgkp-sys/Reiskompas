
const places=[
 {name:'Camping Playa Montroig',map:'https://maps.apple.com/?q=Playa+Montroig'},
 {name:'Barcelona',map:'https://maps.apple.com/?q=Barcelona'},
 {name:'Cambrils',map:'https://maps.apple.com/?q=Cambrils'},
 {name:'Tarragona',map:'https://maps.apple.com/?q=Tarragona'},
 {name:'PortAventura',map:'https://maps.apple.com/?q=PortAventura'}
];
window.onload=()=>{
 const list=document.getElementById('places');
 places.forEach(p=>{
   const li=document.createElement('li');
   li.innerHTML=`<strong>${p.name}</strong><br><a target="_blank" href="${p.map}">Open in Apple Maps</a>`;
   list.appendChild(li);
 });
}
