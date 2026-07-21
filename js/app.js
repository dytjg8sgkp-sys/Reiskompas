function save(){
 const p=document.getElementById('place').value.trim();
 if(!p)return;
 localStorage.setItem('campPlace',p);
 document.getElementById('status').textContent='Kampeerplaats opgeslagen: '+p;
}
window.onload=()=>{
 const p=localStorage.getItem('campPlace');
 if(p){
   document.getElementById('place').value=p;
   document.getElementById('status').textContent='Kampeerplaats opgeslagen: '+p;
 }
};