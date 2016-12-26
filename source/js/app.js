'use strict';

import {screenMenu, parallaxScroll, rotateLogin, map, blog, goDownBtn, wowInit,skillsGo } from './module';
import {waterMaps} from './waterMaps';
import {sliderModule} from './slider';
import {preloaderModule} from './preloader';
import {blogScrollModule} from './blogScroll';
screenMenu();
parallaxScroll();
rotateLogin();
waterMaps();
map();
preloaderModule();
sliderModule();
blog();
goDownBtn();
wowInit();
skillsGo();
blogScrollModule();