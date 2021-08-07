import k from './init.js';
import main from './scenes/main.js';
import win from './scenes/win.js';

k.scene('main', main);
k.scene('win', win);
k.start('main');
