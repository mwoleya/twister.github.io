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

async function requestWakeLock() {
    try {
        const wakeLock = await navigator.wakeLock.request('screen');
        console.log('Wake Lock is active');

        // Re-acquire the wake lock if it is released (e.g., due to visibility change)
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'visible') {
                await navigator.wakeLock.request('screen');
            }
        });
    } catch (err) {
        console.error('Failed to acquire wake lock:', err);
    }
}

function init() {
    console.log(drawColor());
    console.log(drawBodyPart());
    console.log(drawDirection());

    setInterval(function() {
        document.body.style.backgroundColor = drawColor();
        document.getElementById('direction').innerText = drawDirection();
        document.getElementById('body-part-img').src = drawBodyPart() + '.png';
    }, 5000);
}

init();
requestWakeLock();