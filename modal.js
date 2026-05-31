
const button = document.querySelector('#info');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const overlay = document.querySelector('.overlay');



button.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});;

close.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});
