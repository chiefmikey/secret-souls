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

export const talk = (msg) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(msg, 7, { width: 140 }),
      K.pos(K.width() / 2, K.height() - 11),
      K.origin('center'),
    ]),
  );
};

export const cloudyTalk = (msg) => {
  ifTalking();
  talking.push(
    K.add([K.text(msg), K.pos(K.width() / 2, 11), K.origin('center')]),
  );
};
