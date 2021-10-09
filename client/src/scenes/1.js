/* eslint-disable sonarjs/no-duplicate-string */
import K from '../functions/init.js';
import characters from '../content/characters.js';
import { controls, loadIn } from '../functions/controls.js';
import fade from '../functions/fade.js';
import { isGoingBack } from '../actions/backwards.js';

const oneOne = () => {
  const level = [
    '======|||======',
    '==== =   = ====',
    '==   = ™ =   ==',
    '=    =   =    =',
    '=   =     =   =',
    '====       ====',
    '/      $      /',
    '/             /',
    '/             /',
    '====       ====',
    '=   =     =   =',
    '=    =   =    =',
    '=    =   =    =',
    '=    = @ =    =',
    '======///======',
  ];

  let playerOne = [K.sprite('guy'), 'playerOne'];
  let returnPlayerOne = [];
  if (isGoingBack()) {
    playerOne = [];
    returnPlayerOne = [K.sprite('guy'), 'playerOne'];
    loadIn('down');
    fade();
  }

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    $: [K.sprite('key'), K.solid(), 'sign1-1'],
    '@': playerOne,
    '™': returnPlayerOne,
    '/': [K.sprite('door'), 'door1-1'],
    '|': [K.sprite('door'), K.solid(), 'touch1-1'],
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

  setTimeout(() => {
    controls();
  }, 400);
};

export default oneOne;
