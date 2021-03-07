// Поиск

let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');

let admiralInfo = document.getElementById('rostov-admiral-info');
let sochiInfo = document.getElementById('sochi-thieves-info');
let patriotInfo = document.getElementById('rostov-patriotic-info');

let leftBtn = document.getElementById('left-btn');
let midBtn = document.getElementById('mid-btn');
let rightBtn = document.getElementById('right-btn');

let navBarAdmiral = document.getElementById('nav-bar__admiral');
let navBarSochi = document.getElementById('nav-bar__sochi');
let navBarPatriot = document.getElementById('nav-bar__patriot');

let admiralImage = document.getElementById('admiral-photo');
let sochiImage = document.getElementById('sochi-photo');
let patriotImage = document.getElementById('patriot-photo');

// Назначаем обработчик событий

rightArrow.addEventListener('click', () => {
    if (leftBtn.classList.contains('proj-slider__button__active')) {
        showSochi()
    } else if (midBtn.classList.contains('proj-slider__button__active')) {
        showPatriotic()
    } else {
        showAdmiral()
    }
})

leftArrow.addEventListener('click', () => {
    if (leftBtn.classList.contains('proj-slider__button__active')) {
        showPatriotic()
    } else if (midBtn.classList.contains('proj-slider__button__active')) {
        showAdmiral()
    } else {
        showSochi()
    }
})

leftBtn.addEventListener('click', showAdmiral);
midBtn.addEventListener('click', showSochi);
rightBtn.addEventListener('click', showPatriotic);

navBarAdmiral.addEventListener('click', showAdmiral);
navBarSochi.addEventListener('click', showSochi);
navBarPatriot.addEventListener('click', showPatriotic);

// Функции

function showAdmiral() {
    admiralInfo.classList.remove('proj-desc__hidden');
    sochiInfo.classList.add('proj-desc__hidden');
    patriotInfo.classList.add('proj-desc__hidden');

    navBarAdmiral.classList.add('proj-nav-bar__name__active');
    navBarSochi.classList.remove('proj-nav-bar__name__active');
    navBarPatriot.classList.remove('proj-nav-bar__name__active');

    leftBtn.classList.add('proj-slider__button__active');
    midBtn.classList.remove('proj-slider__button__active');
    rightBtn.classList.remove('proj-slider__button__active');

    admiralImage.classList.remove('proj-nav-bar__photo__hidden');
    sochiImage.classList.add('proj-nav-bar__photo__hidden');
    patriotImage.classList.add('proj-nav-bar__photo__hidden');
}

function showSochi() {
    sochiInfo.classList.remove('proj-desc__hidden');
    admiralInfo.classList.add('proj-desc__hidden');
    patriotInfo.classList.add('proj-desc__hidden');

    navBarSochi.classList.add('proj-nav-bar__name__active');
    navBarAdmiral.classList.remove('proj-nav-bar__name__active');
    navBarPatriot.classList.remove('proj-nav-bar__name__active');

    midBtn.classList.add('proj-slider__button__active');
    rightBtn.classList.remove('proj-slider__button__active');
    leftBtn.classList.remove('proj-slider__button__active');

    sochiImage.classList.remove('proj-nav-bar__photo__hidden');
    admiralImage.classList.add('proj-nav-bar__photo__hidden');
    patriotImage.classList.add('proj-nav-bar__photo__hidden');
}

function showPatriotic() {
    patriotInfo.classList.remove('proj-desc__hidden');
    admiralInfo.classList.add('proj-desc__hidden');
    sochiInfo.classList.add('proj-desc__hidden');

    navBarPatriot.classList.add('proj-nav-bar__name__active');
    navBarAdmiral.classList.remove('proj-nav-bar__name__active');
    navBarSochi.classList.remove('proj-nav-bar__name__active');

    rightBtn.classList.add('proj-slider__button__active');
    midBtn.classList.remove('proj-slider__button__active');
    leftBtn.classList.remove('proj-slider__button__active');

    patriotImage.classList.remove('proj-nav-bar__photo__hidden');
    admiralImage.classList.add('proj-nav-bar__photo__hidden');
    sochiImage.classList.add('proj-nav-bar__photo__hidden');
}
