/* eslint-disable no-unused-expressions */
const blackScreen = document.getElementById('blackScreen');

const fade = () => {
  blackScreen.style.animation = 'none';
  blackScreen.offsetHeight;
  blackScreen.style.animation = null;
  blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
};

export default fade;
