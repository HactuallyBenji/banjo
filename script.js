let toggle = 0;

setInterval(() => {
    const textElement = document.getElementById('text');

    if (toggle == 0) {
        toggle = 1;
        textElement.style.display = 'inline';
    } else {
        toggle = 0;
        textElement.style.display = 'none';
    }

}, 500);

