const SHEDULES__CONTAINER = document.querySelectorAll('.shedule__list');
const SHEDULES = document.querySelectorAll('.shedule__item');

if (SHEDULES) {
    SHEDULES.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('active');
        })
    });

    SHEDULES__CONTAINER.forEach(elem => {
        let shedulesItem = elem.querySelector('.shedule__from-to');

        shedulesItem.addEventListener('click', () => {
            if (window.innerWidth < 980) {
                shedulesItem.classList.toggle('active');
            }
        })
    })
}