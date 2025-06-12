import 'swiper/css';
import 'swiper/css/autoplay';
import '/scss/shield.scss';

// components
import { useBurger } from './components/burger';
import { useCookie } from './components/cookie';
import { useAboutShieldSlider } from './components/slider';
import { useQuestionsAccordion } from './components/shield/questionsAccordion';

useBurger();
useCookie();
useAboutShieldSlider();
useQuestionsAccordion();
