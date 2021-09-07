import K from '../functions/init.js';
import { talk, cloudyTalk } from './talking.js';

const playerOne = () => {
  const player = K.get('playerOne')[0];

  let hasKey = false;

  player.overlaps('key', (key) => {
    K.play('coin');
    K.destroy(key);
    hasKey = true;
  });

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

  player.overlaps('ch1', (ch) => {
    K.play('aaa');
    talk(ch.msg);
  });

  player.overlaps('ch2', (ch) => {
    K.play('haha');
    talk(ch.msg);
  });

  player.overlaps('cloudyman', (ch) => {
    K.play('ayy');
    cloudyTalk(ch.msg);
    finalDoor = true;
  });

  player.action(() => {
    player.resolve();
  });

  return player;
};
export default playerOne;
