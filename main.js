let colors = ['red', 'lime', 'blue', 'yellow'];
let direction = ['PRAWA', 'LEWA'];
let bodyPart = ['hand', 'foot'];

function drawColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function drawBodyPart() {
    let index = Math.floor(Math.random() * bodyPart.length);
    return bodyPart[index];
}

function drawDirection() {
    let index = Math.floor(Math.random() * direction.length);
    return direction[index];
}

function init() {
    console.log(drawColor());
    console.log(drawBodyPart());
    console.log(drawDirection());

    document.body.style.backgroundColor = drawColor();
    document.getElementById('direction').innerText = drawDirection();
    document.getElementById('body-part-img').src = drawBodyPart() + '.png';
}

init();