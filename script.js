let drawBox = document.getElementById('draw');
for (let index = 0; index < 256; index++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('box');

    drawBox.appendChild(newDiv);

    newDiv.addEventListener('mouseover', function (event) {
        const divElement = event.target;
        if (divElement.classList.contains('box')) {
            console.log(divElement);
            divElement.style['background-color'] = 'blue';
        }
    });
}
