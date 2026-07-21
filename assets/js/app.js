
async function init(){
 const data=await (await fetch('assets/data/camping.json')).json();

 facilities.innerHTML=data.voorzieningen.map(x=>'<li>'+x+'</li>').join('');

 trips.innerHTML=data.uitstapjes.map(
  x=>`<li><strong>${x.naam}</strong><br><a target="_blank" href="${x.maps}">Open in Apple Maps</a></li>`
 ).join('');
}
window.onload=init;
