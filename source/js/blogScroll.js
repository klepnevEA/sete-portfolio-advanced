var blogScrollModule = () =>  (function(){
    var scrollMenu = (function () {
      var $news = $('.list-article__elem'),
      $item = $('.list-topics__elem'),
      $wrapMenu = $('.list-topics'),
      $wrapMenuWidth = $wrapMenu.css('width'),
      body = document.body,
      isPositionArticle = [],
      offsetHeight = 200,

      positionArticle = function (element) {
          var len = element.length;
          for (let i = 0; i < len; i++) {
            isPositionArticle[i] = {};
            isPositionArticle[i].top = element
            .eq(i)
            .offset()
            .top - offsetHeight;
            isPositionArticle[i].bottom = isPositionArticle[i].top + element
            .eq(i)
            .innerHeight();
        }
    },

    scrollPageFixMenu = function (e) {
      var scroll = window.pageYOffset;
      $wrapMenuWidth = $wrapMenu.css('width');
      if (scroll < $news.offset().top) {
        $wrapMenu.removeClass('list-topics_fixed'),
        $wrapMenu.css('width', $wrapMenuWidth);
    } else {
        $wrapMenu.addClass('list-topics_fixed');
    }
},

scrollPage = function (e) {
  var scroll = window.pageYOffset;
  for (let i = 0; i < isPositionArticle.length; i++) {
    if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
      $item
      .eq(i)
      .addClass('list-topics__elem_active')
      .siblings()
      .removeClass('list-topics__elem_active');
            // console.log(i);
        }
    }
},

clickOnMenu = function (e) {
    var index = $(e.target).parent().index();
    var sectionOffset = $news
    .eq(index)
    .offset()
    .top;
    console.log(sectionOffset);
    $(document).off('scroll', scrollPage);
    $('body, html').animate({
        'scrollTop': sectionOffset
    }, function () {
        $(e.target)
        .parent()
        .addClass('list-topics__elem_active')
        .siblings()
        .removeClass('list-topics__elem_active');
        $(document).on('scroll', scrollPage);
    });
},

addListener = function () {
  $('.list-topics').on('click', clickOnMenu);

  $(document).on('scroll', scrollPage);
  $(document).on('scroll', scrollPageFixMenu);

  $(window).on('load', function (e) {
    positionArticle($news);
})

  $(window).on('resize', function (e) {
    positionArticle($news);
})
}

return {
    init: addListener
}
})();

scrollMenu.init();
}());

export { blogScrollModule};
