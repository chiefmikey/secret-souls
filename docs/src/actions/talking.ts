import K from '../functions/init.js';

let talking = [];

export const ifTalking = () => {
  if (talking[0]) {
    for (const t of talking) {
      K.destroy(t);
    }
    talking = [];
  }
};

export const talk1 = (message) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(message, 7, { width: 140 }),
      K.pos(K.width() / 2, K.height() / 2),
      K.origin('center'),
    ]),
  );
};

export const talk2 = (message) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(message, 7, { width: 140 }),
      K.pos(K.width() / 2, K.height() / 2 - 20),
      K.origin('center'),
    ]),
  );
};
