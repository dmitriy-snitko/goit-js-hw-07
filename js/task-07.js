const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.value = 16;
text.style.fontSize = `${range.value}px`;

range.addEventListener('input', onRateChange);

function onRateChange(e) {
  text.style.fontSize = `${e.currentTarget.value}px`;
}