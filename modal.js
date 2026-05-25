
var button = document.querySelector('#info');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var overlay = document.querySelector('.overlay');



button.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});;

close.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});
