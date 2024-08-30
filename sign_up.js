document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

async function validateForm() {
    var username = document.getElementsByName('username')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('psw')[0].value;
    var confirmPassword = document.getElementsByName('confirm_psw')[0].value;


    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        alert('Username can only contain alphabets, numbers, and underscores.');
        return false;
    }

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password should be at least 8 characters long and contain at least one special character and one number.');
        return false;
    }

    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    
    alert('Registration successful!');
    return true;
}
async function submitForm(event){
    var username = document.getElementsByName('username')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('psw')[0].value;
    var confirmPassword = document.getElementsByName('confirm_psw')[0].value;

if (validateForm()) {
    
    const userData = {
      username,
      email,
      password,
      confirm_password: confirmPassword,
      dob: document.getElementById('dob').value,
    };
  
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('Registration successful!');
      
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  } else {
    // Validation failed
    event.preventDefault(); // Prevent form submission
  }
}
