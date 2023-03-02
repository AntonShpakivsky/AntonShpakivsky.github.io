let ChangeBlock1 = document.querySelector('.punct1');
let ChangeBlock2 = document.querySelector('.punct2');
let ChangeBlock3 = document.querySelector('.punct3');
let Block1 = document.querySelector('.block1');
let Block2 = document.querySelector('.block2');
let Block3 = document.querySelector('.block3');
let Wrapper1 = document.querySelector('.line2');

ChangeBlock1.addEventListener('click', () =>{
    ChangeBlock1.classList.add('active')
    ChangeBlock2.classList.remove('active')
    ChangeBlock3.classList.remove('active')
    Wrapper1.classList.remove('dop')
})
ChangeBlock2.addEventListener('click', () =>{
    ChangeBlock2.classList.add('active')
    ChangeBlock1.classList.remove('active')
    ChangeBlock3.classList.remove('active')
    Wrapper1.classList.add('dop')
})
ChangeBlock3.addEventListener('click', () =>{
    ChangeBlock3.classList.add('active')
    ChangeBlock1.classList.remove('active')
    ChangeBlock2.classList.remove('active')
    Wrapper1.classList.add('dop')
})
Block1.addEventListener('click', () =>{
    Block1.classList.add('active2')
    Block2.classList.remove('active2')
    Block3.classList.remove('active2')
})
Block2.addEventListener('click', () =>{
    Block2.classList.add('active2')
    Block1.classList.remove('active2')
    Block3.classList.remove('active2')
})
Block3.addEventListener('click', () =>{
    Block3.classList.add('active2')
    Block2.classList.remove('active2')
    Block1.classList.remove('active2')
})