var screenMenu = () =>  {
	$('#full-screen-menu__toggle').on('click', function() {
		$(this).toggleClass('active');
		$('#full-screen__wraper').toggleClass('open');
	});
};


var map = () =>  (function(){
	var locationPage = location.pathname;
	if(locationPage == "/about.html") {
		ymaps.ready(init);
		var myMap, 
		myPlacemark;

		function init(){ 
			myMap = new ymaps.Map("map", {
				center: [55.76, 37.64],
				zoom: 7
			}); 

			myPlacemark = new ymaps.Placemark([55.76, 37.64], {
				hintContent: 'Москва!',
				balloonContent: 'Столица России'
			});

			myMap.behaviors.disable('scrollZoom'); 

			myMap.geoObjects.add(myPlacemark);
		}		
	}	

}());

var wowInit = () =>  (function(){
	new WOW().init();
}());


var rotateLogin = () =>  (function(){
	var button = $('.button-autorization'),
	indexFornWraper = $('.login-forn__flip'),
	indexBlock = $('.Background');

	indexFornWraper.on('click', function(e){
		e.stopPropagation();
	});

	button.on('click', function(e){
		e.preventDefault();	
		indexFornWraper.addClass('active');
	});

	indexBlock.on('click', function(e){
		e.preventDefault();	
		indexFornWraper.removeClass('active');
	});		

}());

var parallaxScroll = () => (function(){

	var parallax = (function(){
		var bg = $('.section-top'),
		user = $('.section-top_avatar'),
		sectionText = $('.section-top_bg_svg');

		return {
			move : function (block, windowScroll, strafeAmount) {
				var strafe = windowScroll / -strafeAmount + '%',
				transformString = 'translate3d(0,' + strafe + ', 0)';

				block.css({
					'transform' : transformString,
					'-webkit-transform' : transformString
				});
			},

			init : function (wScroll) {
				this.move(bg, wScroll, 0);
				this.move(sectionText, wScroll, 10);
				this.move(user, wScroll, 3);
			}
		}
	}());	

	$(window).scroll(function(){
		var wScroll = $(window).scrollTop();

		parallax.init(wScroll);
	}); 


}());


var skillsGo = () => (function(){

	var aboutMe = (function(){
		var skills = $('.skills');
		var locationPage = location.pathname;
		if(locationPage == "/about.html") {
			var skillsTop = skills.offset().top,
			g_circles = $('.g_circles');			
		};

		return {
			move : function () {
				var windowScrollTop = $(window).scrollTop(); 

				if(windowScrollTop > skillsTop-100) {
					skills.addClass('active');
				}
			},

		}
	}());	

	$(window).scroll(function(){
		// var wScroll = $(window).scrollTop();

		aboutMe.move();
	}); 


}());

var blog = () =>  (function(){
	$('.section-blog__button, .list-topics__link').on('click', function(e){
		$('.section-blog__list-topics').toggleClass('active');
	});
}());

// var blogScroll = () =>  (function(){
// 	var scrollInit = (function(){
// 		return {
// 			init: function() {
// 				var p = new Promise(function(resolve, reject) {
// 					var locationPage = location.pathname;
// 					if(locationPage) {
// 						resolve(locationPage);
// 					};
// 				});

// 				p.then(function(locationPage){

// 					if(locationPage == "/blog.html") {
// 						var elem = $('#list-topics'),
// 						wrap = $('.section-blog__list-topics');
						
// 						for(var i = 0; i< wrap.length; i++) {
// 							var topListTopics = (wrap[i].offset().top);

// 						}

// 						if(topListTopics <= 0) {
// 							elem.addClass('list-topics_fixed')
// 						}	else {
// 							elem.removeClass('list-topics_fixed')
// 						};
// 					}
// 				});
// 			}
// 		}
// 	}());

// 	scrollInit.init();

// 	$(window).scroll(function(){
// 		scrollInit.init();
// 	}); 	

// }());


var goDownBtn = () =>  (function(){
	var goDownInit = (function(){

		var start = function() {
			_addListeners();
		};

		var _addListeners = function(){
			var sectionTopBtn = $('.section-top__button');
			sectionTopBtn.on('click', _goDown);
		};

		var _goDown  = function(e){
			e.preventDefault();
			var sectionHeight = $(this).closest('section').css('height');
			$('body').animate({scrollTop: sectionHeight}, 800);
		};


		return {
			init: start
		}
	}());



	goDownInit.init();

}());
export { screenMenu, parallaxScroll,rotateLogin, map, blog, goDownBtn, wowInit, skillsGo };
