const BOXSIZE = 30;
const refs = {
  input: document.querySelector('#controls input'),
  renderBtn: document.querySelector('button[data-action = "render"]'),
  destroyBtn: document.querySelector('button[data-action = "destroy"]'),
  boxes: document.querySelector('#boxes'),
}

let boxSize = BOXSIZE;

refs.input.addEventListener('focus', (e) => e.currentTarget.value = '');
refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.renderBtn.addEventListener('click', createBoxes);

function getRandomColor() {
  return `rgb(
    ${Math.ceil(Math.random() * 255)},
    ${Math.ceil(Math.random() * 255)},
    ${Math.ceil(Math.random() * 255)}
    )`;
}

function createBoxes(amount) {
  amount = refs.input.value;
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.margin = '5px';
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomColor();

    refs.boxes.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  refs.input.value = '';
  refs.boxes.innerHTML = '';
  boxSize = BOXSIZE;
}