const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createItem = text => {
  const item = document.createElement('li');
  item.textContent = text;
  return item;
}

document.querySelector('#ingredients').append(...ingredients.map(createItem));