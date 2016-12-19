var screenMenu = () =>  {
	$('#full-screen-menu__toggle').on('click', function() {
		$(this).toggleClass('active');
		$('#full-screen__wraper').toggleClass('open');
	});
};


var map = () =>  (function(){
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
            
            myMap.geoObjects.add(myPlacemark);
        }
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

var blog = () =>  (function(){
		$('.section-blog__button, .list-topics__link').on('click', function(e){
			e.preventDefault();
			$('.section-blog__list-topics').toggleClass('active');
		});
}());
export { screenMenu, parallaxScroll,rotateLogin, map, blog};
