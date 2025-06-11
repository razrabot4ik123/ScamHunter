import 'swiper/css';
import 'swiper/css/autoplay';
import '/scss/about.scss';

// components
import { useBurger } from './components/burger';
import { useCookie } from './components/cookie';
import { useAboutHeroSlider } from './components/slider';

useBurger();
useCookie();
useAboutHeroSlider();
