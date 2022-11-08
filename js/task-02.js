const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
ingredients.forEach(ingredient => {
   const listItem = document.createElement('li');
   listItem.textContent = [ingredient];
   listItem.classList.add('item');
   const listEl = document.querySelector('ul#ingredients');
   listEl.appendChild(listItem);
   console.log(listEl);
});
