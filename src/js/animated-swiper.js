/* -------------------------------------------------------------------------- */
/*                              Animated Swiper                               */
/* -------------------------------------------------------------------------- */

const animatedSwiperInit = () => {

  const swiperContainer = document.querySelectorAll('.animated-swiper');

  if (swiperContainer.length) {
    swiperContainer.forEach(swiper => {
      const swiperInstance = swiper.querySelector('[data-swiper]').swiper;
      swiperInstance.on('slideChange', () => {
        const timelineElements = swiper.querySelectorAll('[data-zanim-timeline]');
        let isInitialLoad = true;
        timelineElements.forEach(el => {
          if (isInitialLoad) {
            isInitialLoad = false;
            return;
          }
          window.zanimation(el, animation => {
            setTimeout(() => {
              animation.play();
            }, 400);
          });
        });
      });
    });
  }

};

export default animatedSwiperInit;
