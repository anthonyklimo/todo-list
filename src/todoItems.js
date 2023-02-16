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

export { createItemElement, getItemInfo };
