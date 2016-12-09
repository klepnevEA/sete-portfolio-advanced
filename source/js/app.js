(function() {
  'use strict';

  $('#full-screen-menu__toggle').on('click', function() {
  	console.log('!');
		$(this).toggleClass('active');
		$('#full-screen__wraper').toggleClass('open');
  }); 

 // $('#full-screen-menu__toggle').click(function() {
 //   $(this).toggleClass('active');
 //   $('#overlay').toggleClass('open');
 //  });
})();