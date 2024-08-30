function calculatePrice() {
    const condition = document.querySelector('input[name="condition"]:checked').value;
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    
    let discountPercentage;

    switch (condition) {
        case 'excellent':
            discountPercentage = 0;
            break;
        case 'good':
            discountPercentage = 10;
            break;
        case 'fair':
            discountPercentage = 20;
            break;
        case 'bad':
            discountPercentage = 30;
            break;
        default:
            discountPercentage = 0;
            break;
    }

    const calculatedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    document.getElementById('calculatedPrice').value = calculatedPrice.toFixed(2);
}
function proceed() {
    // Get data from the form
    const bookData = {
        title: document.getElementById("bookName").value,
        author: document.getElementById("author").value,
        condition: document.querySelector('input[name="condition"]:checked').value,
        review: document.getElementById("review").value,
        original_price: parseFloat(document.getElementById("originalPrice").value),
        seller_name: document.getElementById("Name").value,
        seller_contact: document.getElementById("contact").value,
        seller_address: document.getElementById("address").value,
        upi_id: document.getElementById("upiId").value,
    };

    // Make a POST request to the server
    fetch('http://localhost:3001/sell', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Display payment banner and redirect after 4 seconds
            showPaymentBanner();
            setTimeout(() => {
                window.location.href = "index.html";
            }, 4000);
        } else {
            // Handle error
            alert('Failed to store information. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error during POST request:', error);
        alert('An error occurred. Please try again.');
    });
}


function showPaymentBanner() {
    var paymentBanner = document.getElementById("paymentBanner");
    
   
    paymentBanner.innerHTML = "Payment will be processed in 3-4 business days. Thank you!";

    paymentBanner.style.backgroundColor = "rgba(13, 187, 30)"; 
    paymentBanner.style.color = "#fff"; 
    paymentBanner.style.padding = "15px"; 
    paymentBanner.style.textAlign = "center"; 
    paymentBanner.style.position = "fixed"; 
    paymentBanner.style.width = "100%";
    paymentBanner.style.top = "0"; 
    paymentBanner.style.zIndex = "1"; 

  
    setTimeout(function () {
        paymentBanner.style.display = "none";
    }, 4000);
}


function submitDetails() {
    alert("Details submitted successfully!");
}

