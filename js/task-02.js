const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listItems = ingredients.map(ingredient => {
   const listItem = document.createElement('li');
   listItem.textContent = [ingredient];
   listItem.classList.add('item');
   return listItem;
});

console.log(listItems);

const listEl = document.querySelector('ul#ingredients');
listEl.append(...listItems);

console.log(listEl);
