const SELECT = document.querySelectorAll('.select');
if (SELECT) {
    SELECT.forEach(elem => {
        let selectMain = elem.querySelector('.select__main');
        let selectDrop = elem.querySelector('.select__drop');
        let selectHiddenInput = elem.querySelector('input');
        let selectItems = elem.querySelectorAll('.select__item');

        let ItemsRemoveActive = () => {
            selectItems.forEach(item => {
                item.classList.remove('active');
            })
        }

        selectMain.addEventListener('click', () => {
            selectMain.classList.toggle('active');
        });

        document.addEventListener('click', e => {
            if (!e.composedPath().includes(selectMain) && !e.composedPath().includes(selectDrop)) {
                selectMain.classList.remove('active');
            }
        });

        selectItems.forEach(activeItem => {
            activeItem.addEventListener('click', () => {
                ItemsRemoveActive();
                let activeItemText = activeItem.innerHTML;
                selectMain.innerHTML = activeItemText;
                selectHiddenInput.value = activeItemText;

                activeItem.classList.add('active');
                selectMain.classList.remove('active');
            })
        })
    });
}