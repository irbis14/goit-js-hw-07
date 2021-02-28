const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const addListItems = (list) => list.map(element => {
    const listItems = document.createElement('li');
    listItems.textContent = `${element}`;
    return listItems;
});

const listItems = addListItems(ingredients);

listRef.append(...listItems);
