function getItemInfo() {
  const name = document.getElementById('name').value;
  const desc = document.getElementById('desc').value;
  const date = document.getElementById('date').value;

  const item = {
    name,
    desc,
    date,
  };

  return (item);
}

function createItemElement(item) {
  const todoList = document.getElementById('todo-list');
  const listItem = document.createElement('div');
  listItem.classList.add('list-item');

  const itemName = document.createElement('div');
  itemName.textContent = item.name;
  const itemDesc = document.createElement('div');
  itemDesc.textContent = item.desc;
  const itemDate = document.createElement('div');
  itemDate.textContent = item.date;

  listItem.appendChild(itemName);
  listItem.appendChild(itemDesc);
  listItem.appendChild(itemDate);

  todoList.appendChild(listItem);
}
function clearInput() {
  const inputName = document.getElementById('name');
  const inputDesc = document.getElementById('desc');
  const inputDate = document.getElementById('date');

  inputName.value = '';
  inputDesc.value = '';
  inputDate.value = '';
}

function addItem() {
  const btnAdd = document.getElementById('add-btn');
  btnAdd.addEventListener('click', () => {
    createItemElement(getItemInfo());
    clearInput();
    console.log('hello');
    console.log(getItemInfo());
  });
}

export { createItemElement, getItemInfo, addItem };
