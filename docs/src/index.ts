import K from './functions/init.js';
import one from './scenes/1.js';
import two from './scenes/2.js';
import win from './scenes/win.js';
import './functions/controls.js';

K.scene('1', () => one());
K.scene('2', () => two());
K.scene('win', win);

K.start('1');
