const imgsSF = document.querySelectorAll('.trip-image');
const divBackdrop = document.querySelector('.backdrop');
const divModal = document.querySelector('.modal');

function openModal() {
    divBackdrop.style.display = 'block';
    divModal.style.display = 'block';
}

function closeModal() {
    divBackdrop.style.display = 'none';
    divModal.style.display = 'none';
}

function main() {
    for (let i = 0; i < imgsSF.length; i++) {
        imgsSF[i].addEventListener('click', openModal);
    }
    divBackdrop.addEventListener('click', closeModal);
}

main();
