import K from '../functions/init.js';

let talking = [];

export const ifTalking = () => {
  if (talking[0]) {
    talking.forEach((t) => {
      K.destroy(t);
    });
    talking = [];
  }
};

export const talk1 = (msg) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(msg, 7, { width: 140 }),
      K.pos(K.width() / 2, K.height() / 2),
      K.origin('center'),
    ]),
  );
};

export const talk2 = (msg) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(msg, 7, { width: 140 }),
      K.pos(K.width() / 2, K.height() / 2 - 20),
      K.origin('center'),
    ]),
  );
};
