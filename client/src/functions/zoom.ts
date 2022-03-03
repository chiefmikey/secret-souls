let isZoomed = false;

const appBody: HTMLElement | null = document.querySelector('#body');
const app: HTMLElement | null = document.querySelector('#app');
const zoom: HTMLElement | null = document.querySelector('#zoom');
const title: HTMLElement | null = document.querySelector('#title');
const background: HTMLElement | null = document.querySelector('#background');

const zoomIn = () => {
  if (!isZoomed) {
    if (appBody && app && zoom && title && background) {
      appBody.style.justifyContent = 'flex-start';
      app.style.justifyContent = 'flex-start';
      app.style.height = '190%';
      zoom.style.visibility = 'visible';
      title.style.transform = 'scale(2.1)';
      background.style.maxWidth = 'none';
      isZoomed = true;
    }
  } else if (appBody && app && zoom && title && background) {
    appBody.style.justifyContent = 'center';
    app.style.justifyContent = 'center';
    app.style.height = '100%';
    zoom.style.visibility = '';
    title.style.transform = 'scale(1)';
    background.style.maxWidth = '100%';
    isZoomed = false;
  }
};
if (zoom) {
  zoom?.addEventListener('click', zoomIn);

  if (document.addEventListener) {
    document.addEventListener(
      'contextmenu',
      (event) => {
        if (window.getComputedStyle(zoom).visibility === 'visible') {
          zoomIn();
        }
        event.preventDefault();
      },
      false,
    );
  } else {
    document.addEventListener('oncontextmenu', () => {
      if (window.getComputedStyle(zoom).visibility === 'visible') {
        zoomIn();
      }
      window.event?.preventDefault();
    });
  }
}
