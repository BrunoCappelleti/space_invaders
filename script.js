let score = 0;

//Makes the player when the game starts
const createPlayer = () => {
  player = document.createElement('div');
  player.className = 'player'
  document.querySelector('.game-space').append(player);
};

//finds the player node for various operations
const getPlayer = () => {
  player = document.querySelector('.player');
  return player;
};

//function for the 'keydown' event establish player movements
const activatePlayer = (ev) => {
  if (ev.keyCode === 32) {
    document.querySelector('.laser') ? null : fire();
  } else if (ev.keyCode === 37 || ev.keyCode === 39) {
    movePlayer(ev.keyCode);
  };
};

//when the L/R arrow keys are pressed move player in the correct direction
const movePlayer = (key) => {
  if (key === 37) {
    (getPlayer().offsetLeft > 25) ? getPlayer().style.left = `${getPlayer().offsetLeft - 25}px` : null;
  } else if (key === 39) {
    (getPlayer().offsetLeft + getPlayer().offsetWidth < document.querySelector('.game-space').offsetWidth - 25) ? getPlayer().style.left = `${getPlayer().offsetLeft + 25}px` : null;
  };
};

//when spacebar is pressed, fire a laser
const fire = () => {
  const laser = document.createElement('div');
  laser.className = 'laser';
  document.querySelector('.game-space').append(laser);
  laser.style.left = `${getPlayer().offsetLeft + getPlayer().offsetWidth / 2}px`;
  let move = setInterval(moveLaser, 20, laser);
};

//checks for collision, checks to see if laser is within accept area and moves
const moveLaser = (laser) => {
  checkForCollision(laser);
  laser.offsetTop > 0 ? laser.style.top = `${laser.offsetTop - 10}px` : laser.remove();
};

//compares laser postion to position of all "invaders" if any result in true removes both
const checkForCollision = (laser) => {
  const invaders = document.querySelectorAll('.invader');
  invaders.forEach( (el) => {
    if (laser.offsetTop < el.offsetTop + el.offsetHeight &&
    laser.offsetLeft < el.offsetLeft + el.offsetWidth &&
    laser.offsetLeft + laser.offsetWidth > el.offsetLeft){
      el.remove();
      laser.remove();
      updateScore('collision');
    };
  });
};

//used to calculate score after collision and each game
const updateScore = (string) => {
  string === 'reset' ? score = 0 : null;
  string === 'collision' ? score += 150 : null;
  let scoreString = `${score}`;
  let scoreStringZeros = addZeros(scoreString);
  updateScoreBoard(scoreStringZeros);
};

//add zeros to score value and stores as string to properly display
const addZeros = (string) => {
  let zeroString = string;
  while (zeroString.length < 6){
    zeroString = '0'+ zeroString;
  }
  return zeroString;
};

//takes return from addZeros and displays that in the game
const updateScoreBoard = (string) => {
  document.querySelector('#score').innerHTML = `SCORE<br>${string}`;
};

//creates invaders at the start of the game
const summonInvaders = () => {
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const invader = document.createElement('div');
      invader.className = 'invader';
      document.querySelector('.enemies').append(invader);
      invader.style.left = `${11.5+ (8 * j)}%`;
      invader.style.top = `${3.5 + (8 * i)}%`;
    };
  };
};

//makes invaders move down toward the "player" when called
const moveInvaders = () => {
  let step = document.querySelector('.game-space').offsetHeight / 100
  document.querySelectorAll('.invader').forEach( (inv) => {
    inv.style.top = `${inv.offsetTop + (3 * step)}px`
  });
};

//main counter, has conditions to move invaders and checks for game end
const counter = () => {
  let time = 90;
  let timer = setInterval( () => {
    time % 5 === 0 ? moveInvaders(): null;
    let minutes = Math.floor(time / 60);
    let seconds = (Math.floor(time % 60) < 10) ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
    document.querySelector('#countdown').innerHTML = `TIME<br>0${minutes}:${seconds}`
    time -= 1;
    if (checkForWin()){
      clearInterval(timer);
      setTimeout(endGame, 250, 'winner');
    } else if (time < 0) {
      clearInterval(timer);
      setTimeout(endGame, 250, 'loser');
    };
  }, 1000);
};

//when called by counter, checks to see if any invaders remain
const checkForWin = () => {
  let enemies = document.querySelectorAll('.invader');
  if (enemies.length === 0){
    return true;
  }
  return false;
};

//clears game area at the game's end
const clearBoard = () => {
  document.querySelector('body').removeEventListener('keydown', activatePlayer);
  document.querySelector('.player').remove()
  document.querySelectorAll('.invader').forEach( (el) => el.remove());
  document.querySelectorAll('.laser').forEach( (el) => el.remove());
};

//depending on if the user won or lost displays a message
const endMsg = (result) => {
  let msg = document.createElement('p');
  if (result === 'winner') {
    msg.innerHTML = `ALL INVADERS<br>WERE DESTROYED<br><br>YOU WIN!`;
  } else {
    msg.innerHTML = `THE INVADERS<br>HAVE LANDED<br><br>GAME OVER!`;
  }
  msg.className = 'msg'
  document.querySelector('.game-space').append(msg);
  createButton('play again');
};

//if either checkForWin returns true or time ends starts ending sequence
const endGame = (string) => {
  clearBoard();
  setTimeout(endMsg, 500, string);
}

//all conditions to start the game when "start" button is pressed
const startGame = () => {
  updateScore('reset');
  document.querySelector('.msg').remove();
  document.querySelector('.start-button').removeEventListener('click', startGame);
  document.querySelector('.start-button').remove();
  createPlayer();
  summonInvaders();
  counter();
  document.querySelector('body').addEventListener('keydown', activatePlayer);
};

//creates button that starts the game
const createButton = (buttonCopy) => {
  let button = document.createElement('div');
  button.innerHTML = buttonCopy.toUpperCase()
  button.className = 'start-button';
  document.querySelector('.game-space').append(button);
  button.addEventListener('click', startGame);
};

//calls to display button on load
createButton('start');
