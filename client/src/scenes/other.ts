/* eslint-disable sonarjs/no-duplicate-string */
import characters from '../content/characters';
import { controls } from '../functions/controls';
import K from '../functions/init';

const other = () => {
  const level = [
    '=======f=======',
    '=             =',
    '=             =',
    '=     !       =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=      @      =',
    '===============',
  ];

  K.addLevel(level, {
    '!': [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    '=': [K.sprite('steel'), K.solid()],
    '@': [K.sprite('guy'), 'playerOne'],
    f: [K.sprite('door'), K.solid(), 'finalDoor'],
    height: 11,
    pos: K.vec2(20, 20),
    width: 11,
  });
  controls();
};

export default other;
