// import boom from 'kaboom';
import kaboom from '../../node_modules/kaboom/dist/kaboom.mjs';

const k = kaboom({
  canvas: document.getElementById('game'),
  clearColor: [0, 0, 0, 1],
  crisp: true,
  fullscreen: false,
  width: 205,
  height: 205,
  scale: 1,
  debug: false,
  global: false,
  plugins: [],
});

// k.loadRoot('/client/public/');
k.loadSprite('ch1', 'assets/sprites/ch1.png');
k.loadSprite('ch2', 'assets/sprites/ch2.png');
k.loadSprite('cloudyman', 'assets/sprites/cloudyman.png');
k.loadSprite('door', 'assets/sprites/door.png');
k.loadSprite('guy', 'assets/sprites/guy.png');
k.loadSprite('key', 'assets/sprites/key.png');
k.loadSprite('steel', 'assets/sprites/steel.png');
k.loadSound('coin', 'assets/sounds/coin.ogg');
k.loadSound('hit', 'assets/sounds/hit.ogg');
k.loadSound('moan', 'assets/sounds/moan.wav');
k.loadSound('ayy', 'assets/sounds/ayy.wav');
k.loadSound('b', 'assets/sounds/b.wav');

export default k;
