
async function init(){
 const d=await (await fetch('assets/data/app.json')).json();
 countdown.textContent=d.countdown;
 docs.innerHTML=d.docs.map(x=>'<li>'+x+'</li>').join('');
 plan.innerHTML=d.days.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');
}
window.onload=init;
