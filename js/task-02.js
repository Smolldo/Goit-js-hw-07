const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

 
const list = document.querySelector('#ingredients');

const items = ingredients.map(itemElement =>{
  const li = document.createElement("li");
  li.textContent = itemElement;
  list.append(li);
})