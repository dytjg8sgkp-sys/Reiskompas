
async function loadData(file,target,kind){
 const el=document.getElementById(target); if(!el) return;
 const data=await (await fetch('../assets/data/'+file)).json();
 el.innerHTML='';
 data.forEach(i=>{
   let title=i.naam;
   let sub=i.plaats||i.type||'';
   let tip=i.tip||'';
   el.innerHTML+=`<div class="card"><h3>${title}</h3><p>${sub}</p><p>${tip}</p>
   <a class="btn" target="_blank" href="https://maps.apple.com/?q=${encodeURIComponent(title)}">Apple Maps</a></div>`;
 });
}
window.addEventListener('load',()=>{
 loadData('stranden.json','beaches');
 loadData('activiteiten.json','activities');
});
