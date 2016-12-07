$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    $(".zoom img").css({
        transform: 'translate3d(-50%, -'+(scroll/150)+'%, 0) scale('+(150 + scroll/80)/150+')',
//        Blur suggestion from @janwagner: http://codepen.io/janwagner/ in comments
//        "-webkit-filter": "blur(" + (scroll/200) + "px)",
//        filter: "blur(" + (scroll/200) + "px)"
    });
});