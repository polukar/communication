import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.slider', {
    modules: [Pagination],
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    }
});