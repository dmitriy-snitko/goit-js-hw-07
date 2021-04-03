const categoriesRef = document.querySelector('#categories');

const countCategories = categories => console.log(
  `В списке ${categories.childElementCount} категории.`
);

const countSubcategories = categories => {
  const items = categories.querySelectorAll('.item');
  
  items.forEach(item => console.log(
    `Категория: ${item.firstElementChild.textContent}\n` +
    `Количество элементов: ${item.querySelectorAll('li').length}`
  ));
};

countCategories(categoriesRef);
countSubcategories(categoriesRef);
