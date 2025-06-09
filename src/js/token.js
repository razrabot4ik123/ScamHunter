import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import '/scss/token.scss';

// components
import { useBurger } from './components/burger';
import { useCookie } from './components/cookie';
import { usePartnersSlider } from './components/slider';
import { useQuestionsAccordion } from './components/questionsAccordion';

useBurger();
useCookie();
usePartnersSlider();
useQuestionsAccordion();
