const refs = {
  decrementBtn: document.querySelector('button[data-action = "decrement"]'),
  incrementBtn: document.querySelector('button[data-action = "increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const onDecrementBtnClick = () => refs.value.textContent = counterValue -= 1;
const onIncrementBtnClick = () => refs.value.textContent = counterValue += 1;

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);


