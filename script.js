console.log(`here we go!`);
let gameSpace = document.querySelector('.game-space');
const body = document.querySelector('body');
const player = document.querySelector('.player');
const enemies = document.querySelector('.enemies');

// let createPlayer = () => {
//   player = document.createElement('div');
//   player.className = 'player'
//   gameSpace.append(player);
//   player.style.left = (gamespace.offsetLeft - 50 / 2)
// };

const activatePlayer = (ev) => {
  let key = ev.keyCode;
  if (key === 32){
    fire();
  } else if (key === 37 || key === 39){
    movePlayer(key);
  };
};

const movePlayer = (key) => {
  if (key === 37) {
    (player.offsetLeft > 0) ? player.style.left = `${player.offsetLeft - 25}px` : null;
  } else if (key === 39) {
    (player.offsetLeft + player.offsetWidth < gameSpace.offsetWidth) ? player.style.left = `${player.offsetLeft + 25}px` : null;
  };
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
  checkForCollision(laser);
  currentY > 0 ? laser.style.top = `${laser.offsetTop - 5}px` : laser.remove();
};

const checkForCollision = (laser) => {
  const invaders = document.querySelectorAll('.invader');
  invaders.forEach( (el) => {
    if (laser.offsetTop < el.offsetTop + el.offsetHeight &&
    laser.offsetLeft < el.offsetLeft + el.offsetWidth &&
    laser.offsetLeft + laser.offsetWidth > el.offsetLeft){
      el.remove();
      laser.remove();
    };
  });
};

const summonInvaders = () => {
  for (let i = 0; i < 3; i += 1) {
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

const counter = () => {
  let time = 90;
  let timer = setInterval( () => {
    let minutes = Math.floor(time / 60);
    let seconds = (Math.floor(time % 60) < 10) ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
    document.querySelector('#countdown').innerHTML = `0${minutes} : ${seconds}`
    time -= 1;
    if (checkForWin()){
      clearInterval(timer);
      setTimeout(winCondition, 250);
    } else if (time < 0) {
      clearInterval(timer);
      setTimeout(loseCondition, 250);
    };
  }, 1000);
};

const checkForWin = () => {
  let enemies = document.querySelectorAll('.invader');
  if (enemies.length === 0){
    return true;
  }
  return false;
}

const clearBoard = () => {
  document.querySelector('.player').removeEventListener('keyup', activatePlayer);
  document.querySelector('.player').remove()
  document.querySelectorAll('.invader').forEach( (el) => el.remove());
  document.querySelectorAll('.laser').forEach( (el) => el.remove());
}

const message = (result) => {
  let msg = document.createElement('p');
  if (result === 'winner') {
    msg.innerHTML = `YOU DESTROYED THE INVADERS<br>YOU WIN!`;
  } else {
    msg.innerHTML = `THE INVADERS HAVE LANDED<br>YOU LOSE!`;
  }
  msg.className = 'msg'
  gameSpace.append(msg);
  msg.style.left = `${gameSpace.offsetLeft - 300}`
};

const winCondition = () => {
  clearBoard();
  setTimeout(message, 500, 'winner');
}

const loseCondition = () => {
  clearBoard();
  setTimeout(message, 500, 'loser');
};

counter();
summonInvaders();
body.addEventListener('keyup', activatePlayer);
