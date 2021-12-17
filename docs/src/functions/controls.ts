import { canFly } from '../actions/flying';
import { onGround, isGrounded } from '../actions/grounded';
import { ifTalking } from '../actions/talking';
import playerOne from '../content/player';

import K from './init';
import './zoom';

let directories = {};

let direction;

let getMoving = () => {};
let load = () => {};
let isDown = false;
let timer;
let sound = false;
const SPEED = 80;

export const controls = (input?: string[]) => {
  const player = playerOne();

  directories = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };

  load = () => {
    timer = setInterval(
      () => player.move(directories[direction].scale(SPEED)),
      15,
    );
    setTimeout(() => clearInterval(timer), 1000);
  };

  if (input && input.includes('jump')) {
    directories.space = K.vec2(0, -1);
    delete directories.up;
    delete directories.down;
    K.keyPress('space', () => {
      if ((isGrounded() && !canFly()) || canFly()) {
        player.jump(222);
        onGround(false);
      }
    });
  }

  const dirKeys = Object.keys(directories);

  for (const dirKey of dirKeys) {
    K.keyPress(dirKey, ifTalking);
    K.keyDown(dirKey, () => {
      player.move(directories[dirKey].scale(SPEED));
    });
  }

  getMoving = () => {
    ifTalking();
    timer = setInterval(() => {
      if (isDown) {
        player.move(directories[direction].scale(SPEED));
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
  directories = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };
  direction = dir;
  // dirs[dir] = dirsBackup[dir];
  load();
};

const blackScreen = document.querySelector('#blackScreen');
const title = document.querySelector('#title');

const touchStart = () => {
  if (!sound && getComputedStyle(title).opacity === '1') {
    console.log('ive been touched');
    K.play('coin');
    sound = true;
    document.querySelector('#controls').style.pointerEvents = 'all';
    blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
    title.style.animation = 'fadeOut .2s linear 0s forwards';
  }
};

blackScreen.addEventListener('mousedown', touchStart);
blackScreen.addEventListener('touchstart', touchStart);
title.addEventListener('mousedown', touchStart);
title.addEventListener('touchstart', touchStart);
document.addEventListener('keyup', (event_) => {
  if (event_.code === 'Space' || event_.code === 'Enter') {
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
