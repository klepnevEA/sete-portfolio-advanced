'use strict';

import {screenMenu, parallaxScroll, rotateLogin, map} from './module';
import {waterMaps} from './waterMaps';
import {sliderModule} from './slider';
import {preloaderModule} from './preloader';
screenMenu();
parallaxScroll();
rotateLogin();
waterMaps();
map();
preloaderModule();
sliderModule();
