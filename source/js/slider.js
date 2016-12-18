
var sliderModule = () => (function(){

var slider = (function() {


        var initial = function(){
           _setUpListeners();
        };

        var _setUpListeners = function() {
            $('.slider__block-button').on('click', _openSlider);
        };

        var moveSlide = function(container, slideNum) {
            var 
                items = container.find('.slider__item'),
                activeItem = items.filter('.active'),
                regItem = items.eq(slideNum),
                regIndex = regItem.index(),
                list = container.find('.slider__list'),
                duration = 500;
               

            if(regItem.length)  {
                list.stop(true, true).animate({
                    'top': -regIndex * 100 + '%'
                }, duration, function(){
                    activeItem.removeClass('active');
                    regItem.addClass('active');
                    writeInfo(container);
                });
            };


            
        } 

        var writeInfo = function(container) {
            var items = container.find('.slider__item'),
                activeItem = items.filter('.active'),
                dataTitle=activeItem.data('title'),
                dataSkills=activeItem.data('skills'),
                dataLink=activeItem.data('link'),
                dataSrcPrev=activeItem.data('src-prev'),
                dataSrcNext=activeItem.data('src-next'),
                buttonLeft = $('.first_slider'),
                buttonRight = $('.second_slider');

            var about = $('.title_section-about'),
                description = $('.portfolio-description_text'),
                linkHref = $('.portfolio-description_link');
                
                about.text(dataTitle);
                description.text(dataSkills);
                linkHref.attr('href', dataLink);
                buttonLeft.css('background-image', 'url("'+dataSrcNext+'")');
                buttonRight.css('background-image', 'url("'+dataSrcPrev+'")');    
                console.log(dataSrcPrev);
        } 



        var _openSlider = function(e) {
                    console.log('!');
            e.preventDefault();
                var $this = $(this),
                container = $('.slider__display'),
                items = container.find('.slider__item'),
                activeItem = items.filter('.active'),
                nextItem = activeItem.next(),
                prevItem = activeItem.prev();



 

                if($this.hasClass('slider__block-button_left')) {
                
                    if(nextItem.length) {
                        moveSlide(container, nextItem.index()); 
;   
                    } else {
                        moveSlide(container, 0);                        
                    }
                } else {
                    if(prevItem.length) {
                        moveSlide(container, prevItem.index()); 
                    } else {
                        moveSlide(container, items.length - 1);                     
                    }
                }
        };


    return {
        init: initial
    }
 })();

 slider.init();


// var slider = (function(){
//     var counter = 1,
//         duration = 300,
//         flag = true;

//     var moveSlide = function (container, direction) {
//         var items = container.find('.slider__item'),
//             activeItem = items.filter('.active'),
//             direction = direction == 'down' ? 100 : -100;


//         if (counter >= items.length) {
//             counter = 0;
//         }

//         var reqItem = items.eq(counter);

//         activeItem.animate({
//             'top' : direction + '%'
//         }, duration);

//         reqItem.animate({
//             'top' : '0%'
//         }, duration, function () {
//             activeItem.removeClass('active').css('top', -direction  + '%');
//             $(this).addClass('active');
//             console.log($(this));
//             flag = true;
//         });
//     }
    
//     return {
//         init: function () {
//             $('.slider__block-button_left').on('click', function(e){
//                 e.preventDefault();

//                 var firstSlider = $('.first_slider');
//                 var secondSlider = $('.second_slider');

//                 if (flag) {
//                     flag = false;
//                     moveSlide(firstSlider, 'down');
//                     moveSlide(secondSlider, 'up');
//                 }

//                 counter++;
//             });
//         }
//     }

// }());

// $(function () {
//     slider.init();
// });



}());



export {sliderModule};
