window.onload = () => {
    document.querySelectorAll('.tab-group').forEach(group => {
        group.querySelectorAll('.tab-switch > a').forEach(link => {
            link.addEventListener('click', selectTab);
        });
    });

    document.querySelectorAll('.category-group').forEach(group => {
        group.querySelectorAll('.category-switch > a').forEach(link => {
            link.addEventListener('click', selectCategory);
        });
    });
};

function selectTab(event) {
    if (!event.target.classList.contains('active')) {
        const links = event.target.parentElement.parentElement.querySelectorAll('.tab-switch > a');
        const contents = event.target.parentElement.parentElement.querySelectorAll('.tab-content');
        setActiveClasses(links, contents, event.target.innerText);
    }
}

function selectCategory(event) {
    if (!event.target.classList.contains('active')) {
        const links = event.target.parentElement.parentElement.querySelectorAll('.category-switch > a');
        const contents = event.target.parentElement.parentElement.querySelectorAll('.category-card');
        setActiveClasses(links, contents, event.target.innerText);
    }
}

function setActiveClasses(links, contents, innerText) {
    let indexOfSelect = 0;
    links.forEach((link, index) => {
        if (link.innerText === innerText) {
            indexOfSelect = index;
        }
    });

    links.forEach(link => link.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    links[indexOfSelect].classList.add('active');
    contents[indexOfSelect].classList.add('active');
}
