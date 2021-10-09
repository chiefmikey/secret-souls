import K from './init.js';
import { ifTalking } from '../actions/talking.js';
import { onGround, isGrounded } from '../actions/grounded.js';
import { canFly } from '../actions/flying.js';
import playerOne from '../content/player.js';
import './zoom.js';

let dirs = {};

const dirsBackup = {
  left: K.vec2(-1, 0),
  up: K.vec2(0, -1),
  right: K.vec2(1, 0),
  down: K.vec2(0, 1),
};

let direction;

let getMoving = () => {};
let load = () => {};
let isDown = false;
let timer;
let sound = false;
const SPEED = 80;

export const controls = (input) => {
  const player = playerOne();

  dirs = dirsBackup;

  load = () => {
    timer = setInterval(() => player.move(dirs[direction].scale(SPEED)), 15);
    setTimeout(() => clearInterval(timer), 1000);
  };

  if (input && input.includes('jump')) {
    dirs.space = K.vec2(0, -1);
    delete dirs.up;
    delete dirs.down;
    K.keyPress('space', () => {
      if ((isGrounded() && !canFly()) || canFly()) {
        player.jump(222);
        onGround(false);
      }
    });
  }

  const dirKeys = Object.keys(dirs);

  for (let i = 0; i < dirKeys.length; i += 1) {
    K.keyPress(dirKeys[i], ifTalking);
    K.keyDown(dirKeys[i], () => {
      player.move(dirs[dirKeys[i]].scale(SPEED));
    });
  }

  getMoving = () => {
    ifTalking();
    timer = setInterval(() => {
      if (isDown) {
        player.move(dirs[direction].scale(SPEED));
      }
    }, 15);
  };
};

const playerMove = (e) => {
  e.preventDefault();
  e.returnValue = false;
  if (
    e.type !== 'mouseup' &&
    e.type !== 'touchend' &&
    e.type !== 'touchcancel' &&
    (e.target.id === 'up' ||
      e.target.id === 'right' ||
      e.target.id === 'down' ||
      e.target.id === 'left')
  ) {
    if (
      e.buttons === 1 ||
      e.buttons === 3 ||
      e.type === 'touchstart' ||
      e.type === 'touchmove'
    ) {
      clearInterval(timer);
      isDown = true;
      direction = e.target.id;
      getMoving();
    }
  } else {
    clearInterval(timer);
    isDown = false;
  }
};

export const loadIn = (dir) => {
  dirs = dirsBackup;
  direction = dir;
  // dirs[dir] = dirsBackup[dir];
  load();
};

const blackScreen = document.getElementById('blackScreen');
const title = document.getElementById('title');

const touchStart = () => {
  if (!sound && getComputedStyle(title).opacity === '1') {
    console.log('ive been touched');
    K.play('coin');
    sound = true;
    document.getElementById('controls').style.pointerEvents = 'all';
    blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
    title.style.animation = 'fadeOut .2s linear 0s forwards';
  }
};

blackScreen.addEventListener('mousedown', touchStart);
blackScreen.addEventListener('touchstart', touchStart);
title.addEventListener('mousedown', touchStart);
title.addEventListener('touchstart', touchStart);
document.addEventListener('keyup', (ev) => {
  if (ev.code === 'Space' || ev.code === 'Enter') {
    touchStart();
  }
});

document.addEventListener('mousedown', playerMove);
document.addEventListener('mouseup', playerMove);
document.addEventListener('mouseover', playerMove);
document.addEventListener('touchstart', playerMove, false);
document.addEventListener('touchend', playerMove, false);
document.addEventListener('touchmove', playerMove, false);
document.addEventListener('touchcancel', playerMove, false);
