import { goBack, isGoingBack } from '../actions/backwards';
import { hasWings } from '../actions/flying';
import { onGround } from '../actions/grounded';
import { talk1, talk2 } from '../actions/talking';
import K from '../functions/init';

const playerOne = () => {
  const player = K.get('playerOne')[0];

  // let hasKey = false;
  let sign1 = false;

  player.collides('ch1', (ch) => {
    K.play('aaa');
    talk1(ch.msg);
  });

  player.collides('ch2', (ch) => {
    K.play('haha');
    talk1(ch.msg);
  });

  player.collides('cloudyman', (ch) => {
    K.play('ayy');
    talk2(ch.msg);
    finalDoor = true;
  });

  player.collides('key', (key) => {
    K.play('coin');
    K.destroy(key);
    // hasKey = true;
  });

  player.collides('wings', (wings) => {
    K.play('coin');
    K.destroy(wings);
    hasWings(true);
  });

  player.collides('sign1-1', () => {
    talk1('Where I Go To Dream');
    sign1 = true;
  });

  player.collides('ground', () => onGround(true));

  player.collides('touch1-1', () => {
    if (isGoingBack() || (!isGoingBack() && sign1)) {
      goBack(false);
      K.play('hit');
      K.go('2');
    } else {
      talk1('???');
    }
  });

  player.overlaps('door2-1', () => {
    goBack(true);
    K.play('hit');
    K.go('1');
  });

  let finalDoor = false;

  player.collides('finalDoor', () => {
    if (finalDoor) {
      K.go('win');
    } else {
      talk2('did you talk to the Cloudyman?');
    }
  });

  player.action(() => {
    player.resolve();
  });

  return player;
};
export default playerOne;
