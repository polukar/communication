const OPEN_MODALS = document.querySelectorAll('[open-modal]');
const CLOSE_MODALS = document.querySelectorAll('.modal__close');
if (OPEN_MODALS) {
    OPEN_MODALS.forEach(elem => {
        elem.addEventListener('click', () => {
            let name = elem.getAttribute('open-modal');
            console.log(name)
            let modal = document.querySelector(`.${name}`);
            modal.classList.add('active');
        })
    });
    CLOSE_MODALS.forEach(elem => {
        elem.addEventListener('click', () => {
            let modal = document.querySelectorAll(".modal");
            modal.forEach(modalElem => {
                modalElem.classList.remove('active');
            })
        })
    });
}