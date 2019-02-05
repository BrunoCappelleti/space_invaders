console.log(`here we go!`);
let gameSpace = document.querySelector('.game-space');
const body = document.querySelector('body');
const player = document.querySelector('.player');
const enemies = document.querySelector('.enemies');

// let createPlayer = () => {
//   player = document.createElement('div');
//   player.style.postion = 'absolute';
//   player.style.bottom = '20px'
//   player.style.left = (gamespace.width)
// };

const activatePlayer = (el) => {
  let key = el.keyCode;
  if (key === 32){
    console.log('firing');
    fire();
  } else if (key === 37 || key === 39){
    console.log('moving')
    movePlayer(key);
  }
    else {
    console.log(key);
  }
};

const movePlayer = (key) => {
  if (key === 37) {
    (player.offsetLeft > 0) ? player.style.left = `${player.offsetLeft - 25}px` : null;
  } else if (key === 39) {
    (player.offsetLeft + player.offsetWidth < gameSpace.offsetWidth) ? player.style.left = `${player.offsetLeft + 25}px` : null;
  }
}

const fire = () => {
  const laser = document.createElement('div');
  laser.className = 'laser';
  gameSpace.append(laser);
  laser.style.left = `${parseInt(player.offsetLeft) + (parseInt(player.offsetWidth) / 2)}px`;
  setInterval(moveLaser, 20, laser);
};

const checkForCollison = (laser) => {
  if (laser.offsetTop < (enemies.offsetTop + 20)){
    enemies.style.background = 'green';
    return true;
  };
  return false;
};

const moveLaser = (laser) => {
  let currentY = laser.offsetTop;
  if (checkForCollison(laser)){
    laser.remove();
  }
  (currentY > 0 ? laser.style.top = `${(parseInt(laser.offsetTop) - 5)}px` : laser.remove());
}

const summonInvaders = () => {
  for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < 12; j += 1) {
      const invader = document.createElement('div');
      invader.className = 'invader';
      enemies.append(invader);
      invader.style.left = `${invader.offsetWidth + (70 * j)}px`;
      invader.style.top = `${invader.offsetHeight + (70 * i)}px`;
    };
  };
};

summonInvaders();

body.addEventListener('keyup', activatePlayer);
