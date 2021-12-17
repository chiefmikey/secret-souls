import K from '../functions/init';

const win = () => {
  K.play('priorities');
  K.add([
    K.text('you win!'),
    K.pos(K.width() / 2, K.height() / 2),
    K.origin('center'),
  ]);
};

export default win;
