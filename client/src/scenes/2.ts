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

  let wings = () => [K.sprite('wings'), K.solid(), K.area(), 'wings'];
  if (canFly()) {
    wings = () => [];
  }

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(12, 12),
    W: wings,
    F: () => [K.sprite('door'), K.solid(), K.area(), 'finalDoor'],
    '-': () => [K.sprite('steel'), K.solid(), K.area(), 'ground'],
    '=': () => [K.sprite('steel'), K.solid(), K.area()],
    '@': () => [K.sprite('guy'), K.pos(), K.body(), K.area(), 'playerOne'],
    '|': () => [K.sprite('door'), K.area(), 'door2-1'],
    '!': () => [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
  });

  K.gravity(1234);
  setTimeout(() => controls(['jump']), 400);
};

export default twoOne;
