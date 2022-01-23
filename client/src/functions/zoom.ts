let isZoomed = false;

const zoom = () => {
  if (!isZoomed) {
    document.querySelector('#body').style.justifyContent = 'flex-start';
    document.querySelector('#app').style.justifyContent = 'flex-start';
    document.querySelector('#app').style.height = '190%';
    document.querySelector('#zoom').style.visibility = 'visible';
    document.querySelector('#title').style.transform = 'scale(2.1)';
    document.querySelector('#background').style.maxWidth = 'none';
    isZoomed = true;
  } else {
    document.querySelector('#body').style.justifyContent = 'center';
    document.querySelector('#app').style.justifyContent = 'center';
    document.querySelector('#app').style.height = '100%';
    document.querySelector('#zoom').style.visibility = '';
    document.querySelector('#title').style.transform = 'scale(1)';
    document.querySelector('#background').style.maxWidth = '100%';
    isZoomed = false;
  }
};

document.querySelector('#zoom').addEventListener('click', zoom);

if (document.addEventListener) {
  document.addEventListener(
    'contextmenu',
    (e) => {
      console.log();
      if (
        window.getComputedStyle(document.querySelector('#zoom')).visibility ===
        'visible'
      ) {
        zoom();
      }
      e.preventDefault();
    },
    false,
  );
} else {
  document.attachEvent('oncontextmenu', () => {
    if (
      window.getComputedStyle(document.querySelector('#zoom')).visibility ===
      'visible'
    ) {
      zoom();
    }
    window.event.returnValue = false;
  });
}
