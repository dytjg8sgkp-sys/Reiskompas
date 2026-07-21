
async function init(){
 const data=await (await fetch('assets/data/search.json')).json();
 const list=document.getElementById('results');
 const search=document.getElementById('search');
 function render(filter=''){
   list.innerHTML='';
   data.filter(x=>x.toLowerCase().includes(filter.toLowerCase()))
       .forEach(item=>{
         const li=document.createElement('li');
         li.textContent=item;
         list.appendChild(li);
       });
 }
 render();
 search.oninput=()=>render(search.value);
}
window.onload=init;
