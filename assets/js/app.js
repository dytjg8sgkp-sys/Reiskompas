
let budget = Number(localStorage.getItem('rk64_budget') || 0);
let expenses = JSON.parse(localStorage.getItem('rk64_expenses') || '[]');
let editIndex = -1;

function save(){
  localStorage.setItem('rk64_budget', budget);
  localStorage.setItem('rk64_expenses', JSON.stringify(expenses));
}

function render(){
  document.getElementById('budget').value = budget || '';
  let total = 0;
  const body = document.getElementById('rows');
  body.innerHTML = '';

  expenses.forEach((e,i)=>{
    total += Number(e.amount);
    body.innerHTML += `
      <tr>
        <td>${e.day}</td>
        <td>${e.cat}</td>
        <td>${e.desc}</td>
        <td>€ ${Number(e.amount).toFixed(2)}</td>
        <td>
          <button onclick="editExp(${i})">✏️</button>
          <button onclick="delExp(${i})">🗑️</button>
        </td>
      </tr>`;
  });

  document.getElementById('spent').textContent = '€ ' + total.toFixed(2);
  document.getElementById('left').textContent = '€ ' + (budget-total).toFixed(2);
}

function setBudget(){
  budget = Number(document.getElementById('budget').value || 0);
  save(); render();
}

function addOrUpdate(){
  const item = {
    day: day.value,
    cat: category.value,
    desc: description.value,
    amount: amountInput.value
  };
  if(!item.amount) return;

  if(editIndex >= 0){
    expenses[editIndex] = item;
    editIndex = -1;
    saveBtn.textContent = 'Toevoegen';
  } else {
    expenses.push(item);
  }

  description.value='';
  amountInput.value='';
  save();
  render();
}

function editExp(i){
  const e = expenses[i];
  day.value = e.day;
  category.value = e.cat;
  description.value = e.desc;
  amountInput.value = e.amount;
  editIndex = i;
  saveBtn.textContent = 'Opslaan';
}

function delExp(i){
  expenses.splice(i,1);
  save();
  render();
}

window.onload = render;
