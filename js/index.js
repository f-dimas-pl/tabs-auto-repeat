const title = document.querySelector('.title');
const imageCar = document.querySelector('.header__img');
const optionModel = document.querySelector('.option-model');
const optionColor = document.querySelector('.option-color');
const optionModelButtons = document.querySelectorAll('.option-model__button');
const optionColorButtons = document.querySelectorAll('.option-color__button');

let currentModel = 'tesla-x';
const currentButtonColor = document.querySelector(`[data-option-color="black"]`);

optionModel.addEventListener('click', selectModel);
optionColor.addEventListener('click', selectColor);

function selectModel (event) {
    if (event.target.dataset.optionModel) {
        const currentButton = event.target;
        const model = currentButton.dataset.optionModel;
        currentModel = model;

        title.textContent = currentButton.dataset.nameModel;
        const sourceImageCar = `./img/black-${model}.jfif`
        imageCar.src = sourceImageCar;

        removeActiveClass(optionModelButtons, 'option-model__button--active');
        currentButton.classList.add('option-model__button--active');

        defaultActiveClass('option-color__button--active');
    }
}

function selectColor (event) {
    if (event.target.dataset.optionColor) {
        const currentButton = event.target;
        const color = currentButton.dataset.optionColor;

        const sourceImageCar = `./img/${color}-${currentModel}.jfif`;
        imageCar.src = sourceImageCar;

        removeActiveClass(optionColorButtons, 'option-color__button--active');
        currentButton.classList.add('option-color__button--active');
    }
}



function removeActiveClass (element, activeClass) {
    for (const button of element) {
        button.classList.remove(activeClass);
    }
}

function defaultActiveClass (activeClass) {
    const currentButton = document.querySelector(`.${activeClass}`);

    if (currentButton) {
        currentButton.classList.remove(activeClass);
        currentButtonColor.classList.add(activeClass);
    }
}