window.onload = () => {
    document.getElementById('animated-btn').addEventListener('click',
        (event) => animateButton(event));
};

function animateButton(event) {
    if (!event.target.classList.contains('new-size')) {
        event.target.classList.add('new-size');
        event.target.textContent = 'Go!';
    } else {
        event.target.classList.remove('new-size');

        showOverlay(event.x, event.y);
        setTimeout(changeContent, 2000);
    }
    event.preventDefault();
}

function showOverlay(cx, cy) {
    let namespaceURI = 'http://www.w3.org/2000/svg';
    let svgContainer = document.createElementNS(namespaceURI, 'svg');
    let circleElement = document.createElementNS(namespaceURI, 'circle');

    svgContainer.classList.add('svg-overlay');
    circleElement.setAttributeNS(null, 'cx', cx);
    circleElement.setAttributeNS(null, 'cy', cy);
    circleElement.setAttributeNS(null, 'r', '0');
    document.body.appendChild(svgContainer);
    svgContainer.appendChild(circleElement);
}

function changeContent() {
    let wrapper = document.querySelector('.wrapper');
    let formButton = document.querySelector('.animated-form button');
    let formInput = document.querySelector('.animated-form input');

    if (wrapper.classList.contains('new')) {
        wrapper.classList.remove('new');
    } else {
        wrapper.classList.add('new');
    }

    document.body.removeChild(document.querySelector('.svg-overlay'));
    formButton.classList.remove('new-size');
    formButton.textContent = 'Search...';
    formInput.value = '';
}
