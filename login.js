document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-btn').addEventListener('click', async function (event) {
        event.preventDefault(); // Prevent form submission for now
        try {
            await validateForm();
        } catch (error) {
            console.error('Error during form validation:', error);
        }
    });
});

async function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Assuming you have a function to send login request and handle response
    const isSuccess = await sendLoginRequest(username, password);

    if (isSuccess.success) {
        localStorage.setItem('user', JSON.stringify(isSuccess.user));
        window.location.href = 'index.html'; // Redirect to index.html on successful login
    } else {
        alert('Invalid credentials. Please try again.');
        return false;
    }
}




async function sendLoginRequest(username, password) {
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        console.log('Response Status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'An error occurred during the request.' };
    }
}


function fp(){
    alert("Please check your email for instructions on resetting your password.");
}