var source = $('#templateEntry').html();
var template = Handlebars.compile(source);
function addTodoItems(){
  var description = $('#todoInput').val();
  var date = new Date();
  var trimmedDescription = description.trim();
  if( trimmedDescription){
    var html = template({
       description: trimmedDescription,
        date: date
      });
      $('#todoItems').append($(html));
      $('#todoInput').val("");
  }
}
$('#todoItems').on("click", ".deleteButton",function(event) {
  $(event.currentTarget).parent().remove();
});
$('#mybtn').click(function() {
  addTodoItems();
});
$('#todoInput').keydown(function(e) {
  if( e.keyCode === 13) {
    addTodoItems();
  }
});
