import kaboom from 'kaboom';

const K = kaboom({
  background: [0, 0, 0, 1],
  canvas: document.querySelector('#game') as HTMLCanvasElement,
  crisp: true,
  debug: false,
  global: false,
  height: 211,
  plugins: [],
  scale: 3,
  width: 211,
});

K.onKeyPress(() => {
  console.log('key');
});

// await K.loadRoot('/public/');
await K.loadSprite('ch1', 'public/assets/sprites/ch1.png');
await K.loadSprite('ch2', 'public/assets/sprites/ch2.png');
await K.loadSprite('cloudyman', 'public/assets/sprites/cloudyman.png');
await K.loadSprite('door', 'public/assets/sprites/door.png');
await K.loadSprite('guy', 'public/assets/sprites/guy.png');
await K.loadSprite('key', 'public/assets/sprites/key.png');
await K.loadSprite('wings', 'public/assets/sprites/key.png');
await K.loadSprite('steel', 'public/assets/sprites/steel.png');

await K.loadSound('coin', 'public/assets/sounds/coin.mp3');
await K.loadSound('hit', 'public/assets/sounds/hit.mp3');
await K.loadSound('ayy', 'public/assets/sounds/ayy.mp3');
await K.loadSound('mmm', 'public/assets/sounds/mmm.mp3');
await K.loadSound('haha', 'public/assets/sounds/haha.mp3');
await K.loadSound('aaa', 'public/assets/sounds/aaa.mp3');
await K.loadSound('priorities', 'public/assets/sounds/priorities.mp3');

export default K;
