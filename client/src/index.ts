import 'the-new-css-reset/css/reset.css';
import './styles/index.css';
import 'airbnb-browser-shims';
import K from './functions/init';
import oneOne from './scenes/1';
import twoOne from './scenes/2';
import win from './scenes/win';
import './functions/controls';

K.scene('1', () => oneOne());
K.scene('2', () => twoOne());
K.scene('win', win);

K.go('1');
