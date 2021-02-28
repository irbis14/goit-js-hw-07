const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const toChangeTextSize = () => {
    return spanRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', toChangeTextSize);



