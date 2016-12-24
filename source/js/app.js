'use strict';

import {screenMenu, parallaxScroll, rotateLogin, map, blog, blogScroll, goDownBtn } from './module';
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
blog();
blogScroll();
goDownBtn();