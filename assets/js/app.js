
let expenses = JSON.parse(localStorage.getItem('rk62_expenses') || '[]');

function save(){
  localStorage.setItem('rk62_expenses', JSON.stringify(expenses));
}

function render(){
  const tbody=document.getElementById('rows');
  tbody.innerHTML='';
  let total=0;
  expenses.forEach(e=>{
    total+=Number(e.amount);
    tbody.innerHTML += `<tr><td>${e.category}</td><td>${e.description}</td><td>€ ${Number(e.amount).toFixed(2)}</td></tr>`;
  });
  document.getElementById('total').textContent='€ '+total.toFixed(2);
}

function addExpense(){
  const category=document.getElementById('category').value;
  const description=document.getElementById('description').value;
  const amount=document.getElementById('amount').value;
  if(!amount) return;
  expenses.push({category,description,amount});
  save();
  render();
  document.getElementById('description').value='';
  document.getElementById('amount').value='';
}

window.onload=render;
