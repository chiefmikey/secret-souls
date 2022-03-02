import kaboom from 'kaboom';

const K = kaboom({
  canvas: document.querySelector('#game') as HTMLCanvasElement,
  crisp: true,
  width: 211,
  height: 211,
  scale: 3,
  debug: false,
  global: false,
  plugins: [],
});

// K.loadRoot('/public/');
K.loadSprite('ch1', 'public/assets/sprites/ch1.png');
K.loadSprite('ch2', 'public/assets/sprites/ch2.png');
K.loadSprite('cloudyman', 'public/assets/sprites/cloudyman.png');
K.loadSprite('door', 'public/assets/sprites/door.png');
K.loadSprite('guy', 'public/assets/sprites/guy.png');
K.loadSprite('key', 'public/assets/sprites/key.png');
K.loadSprite('wings', 'public/assets/sprites/key.png');
K.loadSprite('steel', 'public/assets/sprites/steel.png');

K.loadSound('coin', 'public/assets/sounds/coin.mp3');
K.loadSound('hit', 'public/assets/sounds/hit.mp3');
K.loadSound('ayy', 'public/assets/sounds/ayy.mp3');
K.loadSound('mmm', 'public/assets/sounds/mmm.mp3');
K.loadSound('haha', 'public/assets/sounds/haha.mp3');
K.loadSound('aaa', 'public/assets/sounds/aaa.mp3');
K.loadSound('priorities', 'public/assets/sounds/priorities.mp3');

export default K;
