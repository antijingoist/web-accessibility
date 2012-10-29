 $('body').mousemove(function(event) {
     $("#ruler").css('top', event.pageY - 20);
     $("#ruler").css('width', $(window).innerWidth());
 });