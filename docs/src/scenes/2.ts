/* eslint-disable sonarjs/no-duplicate-string */
import { canFly } from '../actions/flying';
import characters from '../content/characters';
import { controls } from '../functions/controls';
import fade from '../functions/fade';
import K from '../functions/init';

const twoOne = () => {
  fade();

  const level = [
    '=================',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '=               =',
    '|@       W      F',
    '-----------------',
    '=================',
    '=================',
    '=================',
  ];

  let wings = [K.sprite('wings'), 'wings'];
  if (canFly()) {
    wings = [];
  }

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(12, 12),
    '=': [K.sprite('steel'), K.solid()],
    '-': [K.sprite('steel'), K.solid(), 'ground'],
    '@': [K.sprite('guy'), K.body(), 'playerOne'],
    '|': [K.sprite('door'), 'door2-1'],
    '!': [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    F: [K.sprite('door'), K.solid(), 'finalDoor'],
    W: wings,
  });

  K.gravity(1234);
  setTimeout(() => controls(['jump']), 400);
};

export default twoOne;
