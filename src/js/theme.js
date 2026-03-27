import { docReady } from './utils';
import detectorInit from './detector';
import dropdownOnHover from './dropdown-on-hover';
import dropdownMenuInit from './dropdown-menu';
import scrollInit from './scroll';
import initMap from './googleMap';
import parallaxInit from './parallax';
import swiperInit from './swiper';
import bgPlayerInit from './bg-player';
import formInit from './form-processor';
import zanimationInit from './zanimation';
import navbarInit from './navbar';
import preloaderInit from './preloader';
import animatedSwiperInit from './animated-swiper';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(dropdownOnHover);
docReady(dropdownMenuInit);
docReady(scrollInit);
docReady(initMap);
docReady(parallaxInit);
docReady(swiperInit);
docReady(bgPlayerInit);
docReady(zanimationInit);
docReady(formInit);
docReady(navbarInit);
docReady(preloaderInit);
docReady(animatedSwiperInit);
