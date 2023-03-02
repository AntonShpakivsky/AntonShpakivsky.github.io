let ShowModalWindow = document.querySelector('.red-prof');
let ModalWindow = document.querySelector('.wrapper1');
let CanselButton = document.querySelector('.but-cansel');
let ShowModalWindowDate = document.querySelector('.red-date');
let ModalWindowDate = document.querySelector('.wrapper2');
let CanselButtonDate = document.querySelector('.but-cansel-date');
let ShowModalWindowPol = document.querySelector('.red-pol');
let ModalWindowPol = document.querySelector('.wrapper3');
let CanselButtonPol = document.querySelector('.but-cansel-pol');
let ShowModalWindowEmail = document.querySelector('.red-email');
let ModalWindowEmail = document.querySelector('.wrapper4');
let CanselButtonEmail = document.querySelector('.but-cansel-email');

ShowModalWindow.addEventListener('click', () => {
    ModalWindow.classList.add('dop')
})
CanselButton.addEventListener('click', () => {
    ModalWindow.classList.remove('dop')
})
ShowModalWindowDate.addEventListener('click', () => {
    ModalWindowDate.classList.add('dop')
})
CanselButtonDate.addEventListener('click', () => {
    ModalWindowDate.classList.remove('dop')
})
ShowModalWindowEmail.addEventListener('click', () => {
    ModalWindowEmail.classList.add('dop')
})
CanselButtonEmail.addEventListener('click', () => {
    ModalWindowEmail.classList.remove('dop')
})
ShowModalWindowPol.addEventListener('click', () => {
    ModalWindowPol.classList.add('dop')
})
CanselButtonPol.addEventListener('click', () => {
    ModalWindowPol.classList.remove('dop')
})


