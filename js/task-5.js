const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const setOutput = () => {
    let text = 'незнакомец';
    if (inputRef.value) { 
        text = inputRef.value;
    } outputRef.textContent = text;
    return;
};

inputRef.addEventListener('input', setOutput);