$(function () {
    $("#addTodo").on("click", event => {
        event.preventDefault();
        const addTodo = {
            addTodo: $("#addTodoInput").val()
        };
        $.ajax("/api/add", {
            type: "POST",
            data: addTodo
        }).then(() => {
            location.reload();
        });
    })
});