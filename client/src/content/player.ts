import { GameObj } from 'kaboom';

import { goBack, isGoingBack } from '../actions/backwards';
import { hasWings } from '../actions/flying';
import { onGround } from '../actions/grounded';
import { talk1, talk2 } from '../actions/talking';
import K from '../functions/init';

const playerOne = () => {
  const player = K.get('playerOne')[0];
  console.log(player);

  // let hasKey = false;
  let sign1 = false;

  K.onCollide('playerOne', 'ch1', (ch: { [key: string]: string }) => {
    K.play('aaa');
    talk1(ch.msg);
  });

  K.onCollide('playerOne', 'ch2', (ch: { [key: string]: string }) => {
    K.play('haha');
    talk1(ch.msg);
  });

  K.onCollide('playerOne', 'cloudyman', (ch: { [key: string]: string }) => {
    K.play('ayy');
    talk2(ch.msg);
    finalDoor = true;
  });

  K.onCollide('playerOne', 'key', (key: GameObj) => {
    K.play('coin');
    K.destroy(key);
    // hasKey = true;
  });

  K.onCollide(
    'playerOne',
    'wings',
    (currentPlayer: GameObj, wings: GameObj, col) => {
      if (col) {
        col.displacement.y = 0;
      }
      K.play('coin');
      K.destroy(wings);
      hasWings(true);
    },
  );

  K.onCollide('playerOne', 'sign1-1', () => {
    talk1('Where I Go To Dream');
    sign1 = true;
  });

  K.onCollide('playerOne', 'ground', () => onGround(true));

  K.onCollide('playerOne', 'touch1-1', () => {
    if (isGoingBack() || (!isGoingBack() && sign1)) {
      goBack(false);
      K.play('hit');
      K.go('2');
    } else {
      talk1('???');
    }
  });

  K.onCollide(
    'playerOne',
    'door2-1',
    (currentPlayer: GameObj, door: GameObj, col) => {
      // if (col?.isRight()) {
      //   goBack(true);
      //   K.play('hit');
      //   K.go('1');
      // }
    },
  );

  K.onUpdate('door2-1', (door: GameObj) => {
    console.log(door.pos.dist(player.pos));
    if (door.pos.dist(player.pos) < 2) {
      goBack(true);
      K.play('hit');
      K.go('1');
    }
  });

  let finalDoor = false;

  K.onCollide('playerOne', 'finalDoor', () => {
    if (finalDoor) {
      K.go('win');
    } else {
      talk2('did you talk to the Cloudyman?');
    }
  });

  return player;
};

export default playerOne;
