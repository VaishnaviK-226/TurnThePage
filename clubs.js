document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentsContainer = document.getElementById("comments-container");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const commentInput = document.getElementById("book-comment");
        const commentText = commentInput.value;

        if (commentText.trim() !== "") {
            addComment(commentText);
            commentInput.value = "";
        }
    });

    function addComment(text) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = text;
        commentsContainer.appendChild(commentDiv);
    }
});
