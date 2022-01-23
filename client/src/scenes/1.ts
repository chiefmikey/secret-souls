/* eslint-disable sonarjs/no-duplicate-string */
import { SpriteComp } from 'kaboom';

import { isGoingBack } from '../actions/backwards';
import characters from '../content/characters';
import { controls, loadIn } from '../functions/controls';
import fade from '../functions/fade';
import K from '../functions/init';

const oneOne = () => {
  const level = [
    '=======|||=======',
    '====         ====',
    '==      ™      ==',
    '=   $           =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=       @       =',
    '=               =',
    '=               =',
    '=               =',
    '=================',
  ];

  let playerOne = [K.sprite('guy'), 'playerOne'];
  let returnPlayerOne: (string | SpriteComp)[] = [];
  if (isGoingBack()) {
    playerOne = [];
    returnPlayerOne = [K.sprite('guy'), 'playerOne'];
    loadIn('down');
    fade();
  }

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(12, 12),
    '=': [K.sprite('steel'), K.solid()],
    $: [K.sprite('key'), K.solid(), 'sign1-1'],
    '@': playerOne,
    '™': returnPlayerOne,
    '/': [K.sprite('door'), 'door1-1'],
    '|': [K.sprite('door'), K.solid(), 'touch1-1'],
    any(ch: string) {
      const char = characters[ch as keyof typeof characters];
      if (char) {
        return [
          K.sprite(char.sprite),
          K.solid(),
          char.sprite,
          {
            msg: char.msg,
          },
        ];
      }
    },
  });

  setTimeout(() => {
    controls();
  }, 400);
};

export default oneOne;
