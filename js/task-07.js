const inputController = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
const spanTextContent = spanText.textContent;

const changeFontSize = () => {
   spanText.style.fontSize = inputController.value + 'px';
   inputController.addEventListener('input', () => {
      spanText.style.fontSize = inputController.value + 'px';
   });
};
changeFontSize();
