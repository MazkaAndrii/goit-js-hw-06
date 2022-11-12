// 1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3. Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const value = document.querySelector('#value');
const valueNumber = value.textContent;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const inputValue = () => {
   const addValue = () => {
      incrementButton.addEventListener('click', () => {
         counterValue += 1;
         value.textContent = counterValue;
      });
   };
   addValue();

   const reduceValue = () => {
      decrementButton.addEventListener('click', () => {
         counterValue -= 1;
         value.textContent = counterValue;
      });
   };
   reduceValue();
};
inputValue();
