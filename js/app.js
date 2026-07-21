const places=['Receptie','Garden Pool','Splash Pool','Supermarkt','La Terrassa','Espai Grill','Strand','Sportcentrum'];
function s(id){document.querySelectorAll('section').forEach(x=>x.hidden=true);document.getElementById(id).hidden=false;}
cd.textContent='Nog '+Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000))+' dagen';
function render(q=''){list.innerHTML='';places.filter(p=>p.toLowerCase().includes(q.toLowerCase())).forEach(p=>{let d=document.createElement('div');d.textContent='📍 '+p;list.appendChild(d);});}
search.oninput=e=>render(e.target.value);render();
function addFav(){let a=JSON.parse(localStorage.f||'[]');if(inp.value){a.push(inp.value);localStorage.f=JSON.stringify(a);inp.value='';rf();}}
function rf(){favs.innerHTML='';JSON.parse(localStorage.f||'[]').forEach(x=>{let li=document.createElement('li');li.textContent=x;favs.appendChild(li);});}rf();
