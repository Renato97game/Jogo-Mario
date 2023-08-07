let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');


function remove() {
    mario.classList.remove('jump');
}

function jump() {
    mario.classList.add('jump');

    setTimeout(remove, 500);
}

function loopGame() {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) 
    {   pipe.style.left = `${pipePosition}px`;
        mario.src ='Images/game-over.png';
        mario.style.width = '100px'; 
    }
}

let loop = setInterval(loopGame, 10);

document.addEventListener('keydown', jump);