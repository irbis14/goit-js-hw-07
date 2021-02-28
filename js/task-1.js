const listRef = document.querySelector('#categories');

const listItemsArr = Array.from(listRef.querySelectorAll('li.item'));

const getListItemsNumber = `В списке ${listItemsArr.length} категории.`;

const catInfo = listItemsArr.map(elem => {
    return `Категория: ${elem.firstElementChild.textContent}, Количество элементов: ${elem.lastElementChild.childElementCount}`;
});

console.log(getListItemsNumber);
console.log(catInfo);