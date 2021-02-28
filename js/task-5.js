const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const setOutput = () => {
    if (inputRef.value === '') { 
        outputRef.textContent = 'незнакомец';
    } outputRef.textContent = inputRef.value;
    return;
};

inputRef.addEventListener('input', setOutput);
