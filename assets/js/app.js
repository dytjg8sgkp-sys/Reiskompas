
async function init(){
 const d=await (await fetch('assets/data/data.json')).json();
 route.innerHTML=d.route.map(x=>'<li>'+x+'</li>').join('');
 docs.innerHTML=d.docs.map(x=>'<li>'+x+'</li>').join('');
 weather.innerHTML=d.weather.map(x=>'<li>'+x+'</li>').join('');
 days.innerHTML=d.days.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join('');
}
window.onload=init;
