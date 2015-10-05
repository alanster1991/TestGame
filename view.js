function moveView() {
  var moveLeft = 0;
  var img1 = $('#view');
  var img2 = $('#view2');
  var swap = true;
  window.setInterval(function() {
    moveLeft -= 50;
    var width = 1763;
    if( !img1 || !img2) {
      img1 = $('#view');
      img2 = $('#view2');
    }
    img1.css("left", moveLeft);
    img2.css("left", width + moveLeft);
    if(moveLeft < width*-1) {
      if(swap){
        img1 = $('#view2');
        img2 = $('#view');
      }else{
        img1 = $('#view');
        img2 = $('#view2');
      }
      swap = !swap;
      moveLeft += width;
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
