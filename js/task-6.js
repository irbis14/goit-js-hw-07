const inputRef = document.querySelector('#validation-input');

const PROPER_NUMBER_SYMBOLS = Number(inputRef.getAttribute("data-length"));

const inputSymbolsChecker = () => {
    inputRef.classList.add("valid");
    inputRef.classList.add("invalid");
    
    inputRef.value.length === PROPER_NUMBER_SYMBOLS ? inputRef.classList.toggle("invalid") : inputRef.classList.toggle("valid");
};

inputRef.addEventListener('change', inputSymbolsChecker);
