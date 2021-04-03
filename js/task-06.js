const inputRef = document.querySelector('#validation-input');
const validDataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('change', validationInputValue);

function validationInputValue(e) {
  const inputDanaLength = e.currentTarget.value.length;

  inputDanaLength === validDataLength
    ? inputRef.classList = 'valid'
    : inputRef.classList = 'invalid'
};
