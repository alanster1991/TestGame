function addList() {
  function addRemoveProcess() {
    var description = $('#todoInput').val();
    var newDiv = $("<div/>");
    newDiv.text(description);
    var date = new Date();
    newDiv.append('<a class="deleteButton"> Delete</a>');
    newDiv.append('<div class="currentDate">' + date + '</div>');
    newDiv.append('<div type="text" class="userName">Alan</div>');
    $('#todoItems').append(newDiv);
    $('#todoInput').val("");
    newDiv.find(".deleteButton").click(function() {
      newDiv.remove();
    });
  }
    $('#mybtn').click(function () {
      addRemoveProcess();
    });
  $('#todoInput').keydown(function(e) {
    if( e.keyCode == 13) {

     addRemoveProcess(); 
    }
  });
}
