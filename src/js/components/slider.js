import Swiper from 'swiper';
import { Autoplay, Grid, EffectFade, Pagination, Navigation } from 'swiper/modules';

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
      modules: [Autoplay, Grid],
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      grid: {
        fill: 'row',
        rows: 2,
      },
      centeredSlides: true,
      spaceBetween: 10,
      slidesPerView: 1.3,
      initialSlide: 1,
      breakpoints: {
        577: {
          grid: {
            fill: 'row',
            rows: 2,
          },
          spaceBetween: 16,
          slidesPerView: 2,
        },
        651: {
          grid: {
            fill: 'row',
            rows: 2,
          },
          slidesPerView: 2.5,
        },
        993: {
          grid: {
            fill: 'row',
            rows: 2,
          },
          slidesPerView: 3,
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

export const useSinglePageAnalysisSlider = () => {
  new Swiper('.analysis__right-slider', {
    modules: [EffectFade, Pagination, Navigation],
    effect: 'fade',
    pagination: {
      el: '.analysis__right-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.analysis__right-button--next',
      prevEl: '.analysis__right-button--prev',
    },
  });
};
