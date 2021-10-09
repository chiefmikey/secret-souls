import K from '../functions/init.js';
import { onGround } from '../actions/grounded.js';
import { hasWings } from '../actions/flying.js';
import { talk, cloudyTalk } from '../actions/talking.js';
import { goBack, isGoingBack } from '../actions/backwards.js';

const playerOne = () => {
  const player = K.get('playerOne')[0];

  let hasKey = false;
  let sign1 = false;

  player.collides('ch1', (ch) => {
    K.play('aaa');
    talk(ch.msg);
  });

  player.collides('ch2', (ch) => {
    K.play('haha');
    talk(ch.msg);
  });

  player.collides('cloudyman', (ch) => {
    K.play('ayy');
    cloudyTalk(ch.msg);
    finalDoor = true;
  });

  player.collides('key', (key) => {
    K.play('coin');
    K.destroy(key);
    hasKey = true;
  });

  player.collides('wings', (wings) => {
    K.play('coin');
    K.destroy(wings);
    hasWings(true);
  });

  player.collides('sign1-1', () => {
    talk('Where I Go To Dream');
    sign1 = true;
  });

  player.collides('ground', () => onGround(true));

  player.collides('touch1-1', () => {
    if (isGoingBack() || (!isGoingBack() && sign1)) {
      goBack(false);
      K.play('hit');
      K.go('2');
    } else {
      talk('???');
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
      talk('did you talk to the Cloudyman?');
    }
  });

  player.action(() => {
    player.resolve();
  });

  return player;
};
export default playerOne;
