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
        441: {
          grid: {
            fill: 'row',
            rows: 2,
          },
          slidesPerView: 1.5,
        },
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

export const useSinglePageTargetSlider = () => {
  new Swiper('.target__right-slider', {
    modules: [EffectFade, Pagination, Navigation],
    effect: 'fade',
    pagination: {
      el: '.target__right-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.target__right-button--next',
      prevEl: '.target__right-button--prev',
    },
  });
};

export const useAboutTokenSlider = () => {
  let aboutTokenSlider = null;

  function checkWidth() {
    if (window.innerWidth <= 992) {
      if (!aboutTokenSlider) {
        initSwiper();
      }
    } else {
      if (aboutTokenSlider) {
        destroySwiper();
      }
    }
  }

  function initSwiper() {
    aboutTokenSlider = new Swiper('.about-token__slider', {
      speed: 1000,
      spaceBetween: 11,
      slidesPerView: 1.1,
      breakpoints: {
        577: {
          slidesPerView: 1.4,
        },
        769: {
          slidesPerView: 2.1,
        },
      },
    });
  }

  function destroySwiper() {
    if (aboutTokenSlider) {
      aboutTokenSlider.destroy(true, true);
      aboutTokenSlider = null;
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth();
};
