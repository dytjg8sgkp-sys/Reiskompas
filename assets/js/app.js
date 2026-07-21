
let budget=Number(localStorage.getItem('rk63_budget')||0);
let expenses=JSON.parse(localStorage.getItem('rk63_expenses')||'[]');

function save(){
 localStorage.setItem('rk63_budget',budget);
 localStorage.setItem('rk63_expenses',JSON.stringify(expenses));
}
function render(){
 document.getElementById('budget').value=budget||'';
 let total=0;
 let body=document.getElementById('rows');
 body.innerHTML='';
 expenses.forEach((e,i)=>{
   total+=Number(e.amount);
   body.innerHTML+=`<tr><td>${e.cat}</td><td>${e.desc}</td><td>€${Number(e.amount).toFixed(2)}</td><td><button onclick="delExp(${i})">🗑️</button></td></tr>`;
 });
 document.getElementById('spent').textContent='€ '+total.toFixed(2);
 document.getElementById('left').textContent='€ '+(budget-total).toFixed(2);
}
function setBudget(){budget=Number(document.getElementById('budget').value||0);save();render();}
function addExp(){
 const cat=category.value,desc=description.value,amount=amountInput.value;
 if(!amount)return;
 expenses.push({cat,desc,amount});
 description.value='';amountInput.value='';
 save();render();
}
function delExp(i){expenses.splice(i,1);save();render();}
window.onload=render;
