let ShowModalWindow = document.querySelector('.red-cards');
let ModalWindow = document.querySelector('.wrapper1');
let CanselButton = document.querySelector('.but-cansel');

ShowModalWindow.addEventListener('click', () => {
    ModalWindow.classList.add('dop')
})
CanselButton.addEventListener('click', () => {
    ModalWindow.classList.remove('dop')
})