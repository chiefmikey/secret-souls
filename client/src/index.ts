import 'the-new-css-reset/css/reset.css';
import './styles/index.css';
import 'airbnb-browser-shims';
import K from './functions/init';
import one from './scenes/1';
import two from './scenes/2';
import win from './scenes/win';
import './functions/controls';

K.scene('1', () => one());
K.scene('2', () => two());
K.scene('win', win);

K.start('1');
