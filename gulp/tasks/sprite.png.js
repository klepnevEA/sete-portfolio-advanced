'use strict';

module.exports = function() {

	$.gulp.task('sprite:png', function() {
		var spriteData = '';

		spriteData = $.gulp.src('./source/sprite/png/*.png')
			.pipe($.gp.spritesmith({
				imgName: 'png_sprite.png',
				cssName: 'png_sprite.scss',
				algoritm: 'left-right',
				padding: 20
			}));

			var imgStream = spriteData.img
					.pipe($.gulp.dest('./source/images'));

			var cssStream = spriteData.css
					.pipe($.gulp.dest('./source/style/common'));
			
			return (imgStream, cssStream);


	});
};