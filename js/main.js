window.onload = () => {
    document.querySelectorAll('.tab-group').forEach(group => {
        group.querySelectorAll('.tab-switch > a').forEach(link => {
            link.addEventListener('click', evt => selectElement(evt, 'tab-switch', 'tab-content'));
        });
    });

    document.querySelectorAll('.category-group').forEach(group => {
        group.querySelectorAll('.category-switch > a').forEach(link => {
            link.addEventListener('click', evt => selectElement(evt, 'category-switch', 'category-content'));
        });
    });

    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', evt => closeByOverlay(evt))
    });

    document.querySelectorAll('.overlay > .modal > button.close').forEach(button => {
        button.addEventListener('click', evt => closeModalWindow(evt))
    });

    document.querySelectorAll('.overlay > .modal > .modal-footer > button.cancel').forEach(button => {
        button.addEventListener('click', evt => closeModalWindow(evt))
    });

    document.getElementById('open-custom-modal').addEventListener('click', evt => {
        document.querySelector('.modal.custom-modal').parentElement.classList.add('active');
    });

    document.getElementById('open-small-modal').addEventListener('click', evt => {
        document.querySelector('.modal.small-modal').parentElement.classList.add('active');
    });

};

function selectElement(event, nameOfSwitch, containerName) {
    if (!event.target.classList.contains('active')) {
        const links = event.target.parentElement.parentElement.querySelectorAll(`.${ nameOfSwitch } > a`);
        const contents = event.target.parentElement.parentElement.querySelectorAll(`.${ containerName }`);
        let indexOfSelect = 0;

        links.forEach((link, index) => {
            if (link.innerText === event.target.innerText) {
                indexOfSelect = index;
            }
        });
        links.forEach(link => link.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        links[indexOfSelect].classList.add('active');
        contents[indexOfSelect].classList.add('active');
    }
}

function closeModalWindow(event) {
    let activeOverlay = event.target;

    while (!activeOverlay.classList.contains('overlay') && !activeOverlay.classList.contains('active')) {
        activeOverlay = activeOverlay.parentElement;
    }

    activeOverlay.classList.remove('active');
}

function closeByOverlay(event) {
    if (event.target.classList.contains('overlay') && event.target.classList.contains('active')) {
        event.target.classList.remove('active');
    }
}
