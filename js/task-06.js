const inputRef = document.querySelector('#validation-input');
const validDataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('change', validationInputValue);

function validationInputValue(e) {
  const inputDanaLength = e.currentTarget.value.length;

  if (inputDanaLength === validDataLength) {
    inputRef.classList = 'valid';
  }

  if (inputDanaLength !== validDataLength) {
    inputRef.classList = 'invalid';
  }

  if (!inputDanaLength) {
    inputRef.classList = '';
  }
};
