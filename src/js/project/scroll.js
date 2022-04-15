import SimpleBar from 'simplebar';

Array.prototype.forEach.call(
    document.querySelectorAll('[data-simplebar]'),
    elem => new SimpleBar(elem)
);