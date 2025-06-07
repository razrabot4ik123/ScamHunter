import 'swiper/css';
import 'swiper/css/effect-fade';
import '/scss/single-news.scss';

// components
import { useBurger } from './components/burger';
import { useCookie } from './components/cookie';
import { useReadMoreBtn } from './components/single-pages/readMoreBtn';
import { useSinglePageAnalysisSlider } from './components/slider';

useBurger();
useCookie();
useReadMoreBtn();
useSinglePageAnalysisSlider();
