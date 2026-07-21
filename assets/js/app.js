
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js').catch(()=>{});}
async function loadModules(){
 const g=document.getElementById('modules');
 if(!g)return;
 const data=await (await fetch('assets/data/modules.json')).json();
 g.innerHTML=data.map(m=>`<a class="tile" href="pages/${m.page}">${m.icon} ${m.name}</a>`).join('');
}
window.addEventListener('load',loadModules);
