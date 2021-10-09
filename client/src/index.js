import K from './functions/init.js';
import oneOne from './scenes/1-1.js';
import oneTwo from './scenes/1-2.js';
import twoOne from './scenes/2-1.js';
import win from './scenes/win.js';
import './functions/controls.js';

K.scene('1-1', () => oneOne());
K.scene('1-2', () => oneTwo());
K.scene('2-1', () => twoOne());
K.scene('win', win);

K.start('1-1');
