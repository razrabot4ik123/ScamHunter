import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export const usePartnersSlider = () => {
  let partnersSlider = null;
  function checkWidth() {
    if (window.innerWidth <= 1200) {
      if (!partnersSlider) {
        initSwiper();
      }
    } else {
      if (partnersSlider) {
        destroySwiper();
      }
    }
  }
  function initSwiper() {
    partnersSlider = new Swiper('.partners__slider', {
      modules: [Autoplay],
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      slidesPerView: 2,
      breakpoints: {
        769: {
          slidesPerView: 3,
        },
        993: {
          slidesPerView: 3.5,
        },
      },
    });
  }
  function destroySwiper() {
    if (partnersSlider) {
      partnersSlider.destroy(true, true);
      partnersSlider = null;
    }
  }
  window.addEventListener('resize', checkWidth);
  checkWidth();
};
