/* eslint-disable sonarjs/no-duplicate-string */
import K from '../functions/init.js';
import characters from '../content/characters.js';
import controls from '../functions/controls.js';

const oneTwo = () => {
  const level = [
    '=======|=======',
    '=      @      =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=      $      =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '=             =',
    '===============',
  ];

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    $: [K.sprite('key'), K.solid(), 'sign1'],
    '@': [K.sprite('guy'), 'playerOne'],
    '|': [K.sprite('door'), K.solid(), 'doorOne1-2'],
    any(ch) {
      const char = characters[ch];
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
      return undefined;
    },
  });
  controls();
};

export default oneTwo;
