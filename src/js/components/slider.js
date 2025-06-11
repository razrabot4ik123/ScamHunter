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
        delay: 3000,
        disableOnInteraction: false,
      },
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 10,
      slidesPerView: 1.3,
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

export const useAboutHeroSlider = () => {
  let aboutHeroSlider = null;

  function checkWidth() {
    if (window.innerWidth <= 992) {
      if (!aboutHeroSlider) {
        initSwiper();
      }
    } else {
      if (aboutHeroSlider) {
        destroySwiper();
      }
    }
  }

  function initSwiper() {
    aboutHeroSlider = new Swiper('.hero__slider', {
      modules: [Autoplay],
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 11,
      slidesPerView: 1.1,
      breakpoints: {
        501: {
          spaceBetween: 15,
          slidesPerView: 1.3,
        },
        601: {
          spaceBetween: 15,
          slidesPerView: 1.7,
        },
        769: {
          spaceBetween: 21,
          slidesPerView: 2.2,
        },
      },
    });
  }

  function destroySwiper() {
    if (aboutHeroSlider) {
      aboutHeroSlider.destroy(true, true);
      aboutHeroSlider = null;
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth();
};
