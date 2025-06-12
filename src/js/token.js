import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import '/scss/token.scss';

// components
import { useBurger } from './components/burger';
import { useCookie } from './components/cookie';
import { usePartnersSlider } from './components/slider';
import { useAboutTokenSlider } from './components/slider';
import { useReadMoreBtn } from './components/token/readMoreBtn';

useBurger();
useCookie();
usePartnersSlider();
useAboutTokenSlider();
useReadMoreBtn();
