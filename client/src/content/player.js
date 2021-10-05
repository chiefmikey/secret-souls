import K from '../functions/init.js';
import { onGround } from '../actions/grounded.js';
import { hasWings } from '../actions/flying.js';
import { talk, cloudyTalk } from '../actions/talking.js';

const playerOne = () => {
  const player = K.get('playerOne')[0];

  let hasKey = false;

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

  player.collides('ground', () => onGround(true));

  player.overlaps('door1', () => {
    if (hasKey) {
      K.play('hit');
      K.go('two');
    } else {
      talk('wherez dey key?');
    }
  });

  let finalDoor = false;

  player.overlaps('finalDoor', () => {
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
