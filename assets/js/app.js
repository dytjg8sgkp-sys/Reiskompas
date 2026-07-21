
async function init(){
 const d=await (await fetch('assets/data/data.json')).json();
 const st=JSON.parse(localStorage.getItem('rk71')||'{}');
 const days=document.getElementById('days');
 d.days.forEach((day,di)=>{
   const div=document.createElement('div');
   div.innerHTML=`<h3>${day.title}</h3>`;
   const ul=document.createElement('ul');
   day.tasks.forEach((t,ti)=>{
     const li=document.createElement('li');
     const cb=document.createElement('input');
     cb.type='checkbox';
     const key=di+'-'+ti;
     cb.checked=!!st[key];
     cb.onchange=()=>{st[key]=cb.checked;localStorage.setItem('rk71',JSON.stringify(st));li.className=cb.checked?'done':'';}
     li.className=cb.checked?'done':'';
     li.append(cb,document.createTextNode(' '+t));
     ul.appendChild(li);
   });
   div.appendChild(ul);
   days.appendChild(div);
 });
 restaurants.innerHTML=d.restaurants.map(x=>'<li>'+x+'</li>').join('');
 pois.innerHTML=d.pois.map(x=>'<li>'+x+'</li>').join('');
}
window.onload=init;
