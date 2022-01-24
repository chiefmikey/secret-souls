import kaboom from 'kaboom';

const K = kaboom({
  canvas: document.querySelector('#game') as HTMLCanvasElement,
  clearColor: [0, 0, 0, 1],
  crisp: true,
  fullscreen: false,
  width: 211,
  height: 211,
  scale: 3,
  debug: false,
  global: false,
  plugins: [],
});

// K.loadRoot('/public/');
K.loadSprite('ch1', 'assets/sprites/ch1.png');
K.loadSprite('ch2', 'assets/sprites/ch2.png');
K.loadSprite('cloudyman', 'assets/sprites/cloudyman.png');
K.loadSprite('door', 'assets/sprites/door.png');
K.loadSprite('guy', 'assets/sprites/guy.png');
K.loadSprite('key', 'assets/sprites/key.png');
K.loadSprite('wings', 'assets/sprites/key.png');
K.loadSprite('steel', 'assets/sprites/steel.png');

K.loadSound('coin', 'assets/sounds/coin.mp3');
K.loadSound('hit', 'assets/sounds/hit.mp3');
K.loadSound('ayy', 'assets/sounds/ayy.mp3');
K.loadSound('mmm', 'assets/sounds/mmm.mp3');
K.loadSound('haha', 'assets/sounds/haha.mp3');
K.loadSound('aaa', 'assets/sounds/aaa.mp3');
K.loadSound('priorities', 'assets/sounds/priorities.mp3');

export default K;
