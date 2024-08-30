document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display comments
    const fetchComments = async () => {
        try {
            const response = await fetch('http://localhost:3001/nfcomments'); // Assuming you have a route to fetch comments
            const data = await response.json();

            // Clear existing comments
            const commentsContainer = document.getElementById('comments-container');
            commentsContainer.innerHTML = '';

            // Append new comments
            data.comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = `<strong>${comment.user_name}:</strong> ${comment.musings}`;
                commentsContainer.appendChild(commentDiv);
            });
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // Call fetchComments on page load
    fetchComments();

    // Event listener for comment form submission
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const musingsInput = document.getElementById('bookcomment');

        const newComment = {
            user_name: usernameInput.value,
            musings: musingsInput.value,
        };

        // Send comment to the server
        try {
            const response = await fetch('http://localhost:3001/nfcomment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                // If comment is successfully posted, fetch and display updated comments
                fetchComments();
            } else {
                console.error('Error posting comment:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting comment:', error);
        }

        // Clear input fields
        usernameInput.value = '';
        musingsInput.value = '';
    });
});
