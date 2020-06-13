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
    });

    $(".completeNote").on("click", function (event) {
        event.preventDefault();
        const id = {
            id: $(this).attr("note-id")
        };
        $.ajax("/api/complete", {
            type: "PUT",
            data: id
        }).then(function () {
            location.reload();
        })
    });
});