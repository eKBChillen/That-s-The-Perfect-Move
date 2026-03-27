import utils from './utils';

const navbarInit = () => {
  const navbars = document.querySelectorAll('[data-navbar-soft-on-scroll]');

  if (!navbars.length) return;

  navbars.forEach(navbar => {
    const windowHeight = window.innerHeight;
    const togglerButton = navbar.querySelector('[data-toggler-button]');
    const classList = navbar.getAttribute('class').split(' ');
    const breakpoint = classList.find(item => item.includes('navbar-expand-')).split('navbar-expand-')[1];
    const bgNavbarRGB = '11, 23, 39';
    let alpha;

    const setNavbarBackground = () => {
      const isCollapsed = togglerButton.classList.contains('collapsed');
      alpha = Math.min(Math.max((window.scrollY / windowHeight) * 2, 0), 1);

      const isSmallScreen = window.innerWidth <= utils.breakpoints[breakpoint];

      if (isSmallScreen && alpha <= 0.2 && !isCollapsed) {
        navbar.style.backgroundColor = `rgba(${bgNavbarRGB}, ${Math.min(alpha + 0.2, 1)})`;
      } else {
        navbar.style.backgroundColor = `rgba(${bgNavbarRGB}, ${alpha})`;
      }
    };

    const handleTogglerButtonClick = () => {
      const isCollapsed = togglerButton.classList.contains('collapsed');
      if (alpha <= 0.2) {
        navbar.style.backgroundColor = isCollapsed ?
          `rgba(${bgNavbarRGB}, 0)`
          : `rgba(${bgNavbarRGB}, 0.2)`;
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth > utils.breakpoints[breakpoint]) {
        navbar.style.backgroundColor = alpha === 0 ?
          `rgba(${bgNavbarRGB}, 0)`
          : `rgba(${bgNavbarRGB}, ${alpha})`;
      } else if (!togglerButton.classList.contains('collapsed') && alpha <= 0.2) {
        navbar.style.backgroundColor = `rgba(${bgNavbarRGB}, 0.2)`;
      }
    };

    setNavbarBackground();
    document.addEventListener('scroll', setNavbarBackground);
    togglerButton.addEventListener('click', handleTogglerButtonClick);
    window.addEventListener('resize', handleWindowResize);
  });
};

export default navbarInit;
