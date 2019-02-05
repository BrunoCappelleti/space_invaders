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
    fire();
  } else if (key === 37 || key === 39){
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

const checkForCollison = (laser) => {
  const bool = null;
  const invaders = document.querySelectorAll('.invader');
  invaders.forEach( (inv) => {
    if (laser.offsetTop < inv.offsetTop + inv.offsetHeight &&
      laser.offsetLeft < inv.offsetLeft + inv.offsetWidth &&
      laser.offsetLeft + laser.offsetWidth > inv.offsetLeft){
        inv.remove();
        laser.remove();
      };
    });
  };

const fire = () => {
  const laser = document.createElement('div');
  laser.className = 'laser';
  gameSpace.append(laser);
  laser.style.left = `${parseInt(player.offsetLeft) + (parseInt(player.offsetWidth) / 2)}px`;
  setInterval(moveLaser, 20, laser);
};

const moveLaser = (laser) => {
  let currentY = laser.offsetTop;
  checkForCollison(laser);
  currentY > 0 ? laser.style.top = `${laser.offsetTop - 5}px` : laser.remove();
}

const summonInvaders = () => {
  for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < 12; j += 1) {
      console.log('making invader');
      const invader = document.createElement('div');
      invader.className = 'invader';
      enemies.append(invader);
      invader.style.left = `${50 + (70 * j)}px`;
      invader.style.top = `${50 + (70 * i)}px`;
    };
  };
};

summonInvaders();

body.addEventListener('keyup', activatePlayer);
