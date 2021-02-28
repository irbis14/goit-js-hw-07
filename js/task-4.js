const counterRef = document.querySelector('#value');
const increaseListenerBtn = document.querySelector('[data-action= "increment"]');
const decreaseListenerBtn = document.querySelector('[data-action= "decrement"]');


let counterValue = Number(counterRef.textContent);

const increment = () => {
    counterValue += 1;
    return counterRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    return counterRef.textContent = counterValue;
};

increaseListenerBtn.addEventListener('click', increment)
decreaseListenerBtn.addEventListener('click', decrement)

