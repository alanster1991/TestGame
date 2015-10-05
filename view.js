function moveView() {
  var moveLeft = 0;
  var img1 = $('#view');
  var img2 = $('#view2');
  window.setInterval(function() {
    moveLeft += 30;
    var width = 1763;
    if( !img1 || !img2) {
      img1 = $('#view');
      img2 = $('#view2');
    }
    img1.css("right", moveLeft);
    img2.css("right", moveLeft - width);
    if(moveLeft > width) {
        img1 = $('#view2');
        img2 = $('#view');
        moveLeft = 0;
      }
   }, 100);
   $(document).keydown(function(e) {
     if( e.keyCode == 32) {
       $('.person').css("top", 100);
     
    }
   });
   $(document).keyup(function(e) {
    if( e.keyCode == 32) {
      $('.person').css("top", 200);
    }
   });

}
