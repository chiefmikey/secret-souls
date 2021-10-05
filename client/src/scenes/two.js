/* eslint-disable sonarjs/no-duplicate-string */
import K from '../functions/init.js';
import characters from '../content/characters.js';
import controls from '../functions/controls.js';

const two = () => {
  const level = [
    '===============',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=@       W    F',
    '---------------',
  ];

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    '-': [K.sprite('steel'), K.solid(), 'ground'],
    '@': [K.sprite('guy'), K.body(), 'playerOne'],
    '!': [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    F: [K.sprite('door'), K.solid(), 'finalDoor'],
    W: [K.sprite('wings'), 'wings'],
  });
  K.gravity(1234);
  controls(['jump']);
};

export default two;
