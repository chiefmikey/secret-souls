/* eslint-disable @typescript-eslint/no-loop-func */
import { Vec2, Key } from 'kaboom';

import { canFly } from '../actions/flying';
import { onGround, isGrounded } from '../actions/grounded';
import { ifTalking } from '../actions/talking';
import playerOne from '../content/player';

import K from './init';
import './zoom';

let allDirections: {
  left?: Vec2;
  up?: Vec2;
  right?: Vec2;
  down?: Vec2;
  space?: Vec2;
} = {};

let direction: string;

let getMoving = () => {};
let load = () => {};
let isDown = false;
let timer: NodeJS.Timer;
let sound = false;
const SPEED = 80;

export const controls = (input?: string[]) => {
  const player = playerOne();

  allDirections = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };

  load = () => {
    timer = setInterval(
      () =>
        player.move(
          allDirections[direction as keyof typeof allDirections]?.scale(SPEED),
        ),
      15,
    );
    setTimeout(() => clearInterval(timer), 1000);
  };

  if (input && input.includes('jump')) {
    allDirections.space = K.vec2(0, -1);
    delete allDirections.up;
    delete allDirections.down;
    K.keyPress('space', () => {
      if ((isGrounded() && !canFly()) || canFly()) {
        player.jump(222);
        onGround(false);
      }
    });
  }

  const directionKeys = Object.keys(allDirections);

  for (const key of directionKeys) {
    K.keyPress(key as Key, ifTalking);
    K.keyDown(key as Key, () => {
      player.move(
        allDirections[key as keyof typeof allDirections]?.scale(SPEED),
      );
    });
  }

  getMoving = () => {
    ifTalking();
    timer = setInterval(() => {
      if (isDown) {
        player.move(
          allDirections[direction as keyof typeof allDirections]?.scale(SPEED),
        );
      }
    }, 15);
  };
};

const playerMove = (event: MouseEvent | TouchEvent) => {
  const inputTarget = event.target as HTMLElement;
  event.preventDefault();
  if (
    event.type !== 'mouseup' &&
    event.type !== 'touchend' &&
    event.type !== 'touchcancel' &&
    (inputTarget.id === 'up' ||
      inputTarget.id === 'right' ||
      inputTarget.id === 'down' ||
      inputTarget.id === 'left')
  ) {
    if (
      (event as MouseEvent).buttons === 1 ||
      (event as MouseEvent).buttons === 3 ||
      event.type === 'touchstart' ||
      event.type === 'touchmove'
    ) {
      clearInterval(timer);
      isDown = true;
      direction = inputTarget.id;
      getMoving();
    }
  } else {
    clearInterval(timer);
    isDown = false;
  }
};

export const loadIn = (inputDirection: string) => {
  allDirections = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };
  direction = inputDirection;
  // dirs[dir] = dirsBackup[dir];
  load();
};

const blackScreen: HTMLElement | null = document.querySelector('#blackScreen');
const title: HTMLElement | null = document.querySelector('#title');

const touchStart = () => {
  if (!sound && getComputedStyle(title).opacity === '1') {
    console.log('ive been touched');
    K.play('coin');
    sound = true;
    (document.querySelector('#controls') as HTMLElement).style.pointerEvents =
      'all';
    if (blackScreen && title) {
      blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
      title.style.animation = 'fadeOut .2s linear 0s forwards';
    }
  }
};

if (blackScreen && title) {
  blackScreen.addEventListener('mousedown', touchStart);
  blackScreen.addEventListener('touchstart', touchStart);
  title.addEventListener('mousedown', touchStart);
  title.addEventListener('touchstart', touchStart);
}
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
