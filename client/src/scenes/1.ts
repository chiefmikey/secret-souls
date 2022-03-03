/* eslint-disable sonarjs/no-duplicate-string */
import { SpriteComp, PosComp, AreaComp } from 'kaboom';

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

  const player = () => [
    K.sprite('guy'),
    K.solid(),
    K.area(),
    K.pos(),
    'playerOne',
  ];
  let playerOne = player;
  let returnPlayerOne: () => (
    | string
    | PosComp
    | SpriteComp
    | AreaComp
  )[] = () => [];
  if (isGoingBack()) {
    playerOne = () => [];
    returnPlayerOne = player;
    loadIn('down');
    fade();
  }

  K.addLevel(level, {
    $: () => [K.sprite('key'), K.solid(), K.area(), 'sign1-1'],
    '/': () => [K.sprite('door'), 'door1-1'],
    '=': () => [K.sprite('steel'), K.solid(), K.area()],
    '@': playerOne,
    any(ch: string) {
      const char = characters[ch as keyof typeof characters];
      if (char) {
        return () => [
          K.sprite(char.sprite),
          K.solid(),
          K.area(),
          char.sprite,
          {
            msg: char.msg,
          },
        ];
      }
    },
    height: 11,
    pos: K.vec2(12, 12),
    width: 11,
    '|': () => [K.sprite('door'), K.solid(), K.area(), 'touch1-1'],
    '™': returnPlayerOne,
  });

  setTimeout(() => {
    controls();
  }, 400);
};

export default oneOne;
