const item = document.querySelectorAll('.item');
console.log(`В списках с id categories ${item.length} элемента с классом item`)

/////////
const Categories = category =>
category.forEach(element => console.log(`Категория: ${element.querySelector('h2').textContent}. Количество элементов: ${element.querySelectorAll(`li`).length}`));

Categories(item)