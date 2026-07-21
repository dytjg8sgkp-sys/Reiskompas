
const pages={
dashboard:`<div class='card'><h2>Dashboard</h2><p id='cd'></p><p>📍 Playa Montroig Camping Resort</p></div>`,
route:`<div class='card'><h2>Reisroute</h2><ul><li>België → La Jonquera</li><li>Hotelovernachting</li><li>La Jonquera → Playa Montroig</li></ul></div>`,
camping:`<div class='card'><h2>Camping</h2><input id='pitch' placeholder='Kampeerplaats'><button onclick='savePitch()'>Opslaan</button><p id='status'></p></div>`,
omgeving:`<div class='card'><h2>Omgeving</h2><ul><li>Cambrils</li><li>Salou</li><li>Tarragona</li><li>Barcelona</li><li>PortAventura World</li></ul></div>`,
check:`<div class='card'><h2>Checklist</h2>
<label><input type='checkbox' data-k='pas'> Paspoorten</label><br>
<label><input type='checkbox' data-k='car'> Caravan aangekoppeld</label><br>
<label><input type='checkbox' data-k='gas'> Gas afgesloten</label></div>`
};

function openPage(name){
 content.innerHTML=pages[name];
 document.querySelectorAll('.bottom button').forEach(b=>b.classList.toggle('active',b.dataset==name));
 if(name==="dashboard"){
   const d=Math.max(0,Math.ceil((new Date('2026-08-02')-new Date())/86400000));
   cd.textContent=`Nog ${d} dagen tot vertrek`;
 }
 if(name==="camping"){
   pitch.value=localStorage.pitch25||"";
   status.textContent=localStorage.pitch25?`Opgeslagen: ${localStorage.pitch25}`:"";
 }
 if(name==="check"){
   document.querySelectorAll("[data-k]").forEach(c=>{
      c.checked=localStorage[c.dataset.k]==="1";
      c.onchange=()=>localStorage[c.dataset.k]=c.checked?"1":"0";
   });
 }
}
function savePitch(){
 localStorage.pitch25=pitch.value;
 status.textContent="Opgeslagen.";
}
document.querySelectorAll(".bottom button").forEach(b=>b.onclick=()=>openPage(b.dataset));
openPage("dashboard");
