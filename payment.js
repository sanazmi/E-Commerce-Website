var cardNumber = document.getElementById('cardNumber');
var expiryDate = document.getElementById('expiryDate');
var cvv = document.getElementById('cvv');

cardNumber.addEventListener('input', isValidCardNumber);
expiryDate.addEventListener('input', isValidExpiryDate);
cvv.addEventListener('input', isValidcvv);

function isValidCardNumber() {
    var card = ""; //local variable
    var cardNumberValue = document.getElementById('cardNumber').value;

    if (/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(cardNumberValue)) {
        card = '';
    } else {
        card = 'Invalid card number format. Please enter 16 digits.';
    }
    updateErrorDisplay('card', card);
}



function isValidExpiryDate() {
    var expiry = ""; // Local variable, not global
    var expiryDateInput = document.getElementById('expiryDate');
    var expiryDateValue = expiryDateInput.value;

    if (!/^\d{0,2}\/\d{0,4}$/.test(expiryDateValue)) {
        expiry = "Invalid expiry date format. Please use MM/YYYY.";
    } else {
        expiry = "";
    }

    // Automatic slash
    if (/^\d{2}$/.test(expiryDateValue)) {
        expiryDateInput.value = expiryDateValue + '/';
    }
    updateErrorDisplay('expiry', expiry);
}

function isValidcvv() {
    var cvs = ""; // Local variable, not global
    var cvvValue = document.getElementById('cvv').value;

    if (cvvValue === "") {
        cvs = "CVV is required.";
    } else if (!/^\d{3}$/.test(cvvValue)) {
        cvs = "Invalid CVV format. Please enter 3 digits.";
    } else {
        cvs = "";
    }
    updateErrorDisplay('cvs', cvs);
}

function updateErrorDisplay(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
}

function submitOrder(event) {
    updateErrorDisplay('card', '');
    updateErrorDisplay('expiry', '');
    updateErrorDisplay('cvs', '');


    isValidCardNumber();
    isValidExpiryDate();
    isValidcvv();


    var cardError = document.getElementById('card').textContent;
    var expiryError = document.getElementById('expiry').textContent;
    var cvsError = document.getElementById('cvs').textContent;


    if (cardError === "" && expiryError === "" && cvsError === "") {
        alert("Order placed!!");
        document.getElementById('checkout-form').reset(); // Reset the form after submission
    } else {
        event.preventDefault();
    }
}