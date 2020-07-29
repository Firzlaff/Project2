// Function to create the Todo when the button is clicked
$(function() {
  $("#addTodo").on("click", (event) => {
    event.preventDefault();
    const addTodo = {
    addTodo: $("#addTodoInput").val(),
    };
    $.ajax("/api/add", {
      type: "POST",
      data: addTodo,
      }).then(() => {
      location.reload();
    });
  });
  // Function to complete the Todo when you click the complete button
  $(".completeNote").on("click", function(event) {
    event.preventDefault();
    const id = {
      id: $(this).attr("note-id"),
    };
    $.ajax("/api/complete", {
      type: "PUT",
      data: id,
    }).then(function() {
      location.reload();
    });
  });
  // function to delete the Todo after it has been completed
  $(".deleteNote").on("click", function(event) {
    event.preventDefault();
    const id = {
      id: $(this).attr("note-id"),
   };
    $.ajax("/api/delete", {
      type: "DELETE",
      data: id,
    }).then(function() {
      location.reload();
    });
  });
});