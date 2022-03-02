const blackScreen: HTMLElement | null = document.querySelector('#blackScreen');

const fade = () => {
  if (blackScreen) {
  blackScreen.style.animation = 'none';
  blackScreen.offsetHeight;
  blackScreen.style.animation = '';
  blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';}
};

export default fade;
