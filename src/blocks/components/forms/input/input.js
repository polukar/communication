const INPUT_BLOCK = document.querySelectorAll('.input');

if (INPUT_BLOCK) {
    INPUT_BLOCK.forEach(elem => {
        let input = elem.querySelector('input');
        let watch = elem.querySelector('.input__watchpassword');
        if (!watch) return;

        watch.addEventListener('click', () => {
            watch.classList.toggle('active');
            if (watch.classList.contains('active')) {
                input.setAttribute('type', 'text');
            } else {
                input.setAttribute('type', 'password');
            }
        })
    })
}