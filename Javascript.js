// slide chnage
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// slide change every three seconds
document.addEventListener("DOMContentLoaded", function() {
    // const slides = document.querySelectorAll(".slide");
    // let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Change slide every 3 seconds
    showSlide(currentSlide); // Show the initial slide
});

// window.onload = updateCartDisplay()

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active-slide');
        } else {
            slide.classList.remove('active-slide');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

showSlide(currentSlide);

// form validation

// var Merror = "";
// var Perror = "";
// var email = document.getElementById("email");
// var pass = document.getElementById("pw");
// console.log(email.password);

// email.addEventListener('input', isvalidemail);

// function isvalidemail() {
//     var email = document.getElementById('email').value;
//     var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     console.log(regex.test(email), email, regex)
//     if (email === "") {
//         Merror = "Email is required!";
//     } else if (!regex.test(email)) {
//         Merror = "Invalid mail Id!"
//     } else {
//         Merror = "";
//     }
//     updateErrorDisplay('Merror', Merror);
// }

// pass.addEventListener('input', isvalidPassword);

// function isvalidPassword() {
//     var password = document.getElementById('pw').value;

//     if (password === "") {
//         Perror = "Password is required!";
//     } else if (password.length < 10) {
//         Perror = "Password must be atleast 10 characters long!";
//     } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
//         Perror = "Invalid Password";
//     } else {
//         Perror = "";
//     }
//     updateErrorDisplay('Perror', Perror);
// }

// function updateErrorDisplay(elementId, errorMessage) {
//     var errorElement = document.getElementById(elementId);
//     errorElement.textContent = errorMessage;
// }

// function validateForm(event) {
//     isvalidemail();
//     isvalidPassword();

//     if (Merror === "" && Perror === "") {
//         alert("form submitted!")
//     } else {
//         event.preventDefault();
//     }
// }

var users = [
    { email: "user1@example.com", password: "Password123@" },
    { email: "user2@example.com", password: "SecurePass456!" },
    { email: "user3@example.com", password: "SafePass@123!" },
    { email: "user4@example.com", password: "SafePass@456!" },

];

var Merror = "";
var Perror = "";
var email = document.getElementById("email");
var pass = document.getElementById("pw");
// console.log(email.password);

email.addEventListener('input', isvalidemail);

function isvalidemail() {
    var emailValue = document.getElementById('email').value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    console.log(regex.test(emailValue), emailValue, regex)
    if (emailValue === "") {
        Merror = "Email is required!";
    } else if (!regex.test(emailValue)) {
        Merror = "Invalid mail Id!"
    } else {
        Merror = "";
    }
    updateErrorDisplay('Merror', Merror);
}

pass.addEventListener('input', isvalidPassword);

function isvalidPassword() {
    var password = document.getElementById('pw').value;

    if (password === "") {
        Perror = "Password is required!";
    } else if (password.length < 10) {
        Perror = "Password must be at least 10 characters long!";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        Perror = "Invalid Password";
    } else {
        Perror = "";
    }
    updateErrorDisplay('Perror', Perror);
}

function updateErrorDisplay(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
}


function validateForm(event) {
    isvalidemail();
    isvalidPassword();
    event.preventDefault();

    if (Merror === "" && Perror === "") {
        // Check if the entered email and password match any user
        var enteredEmail = document.getElementById('email').value;
        var enteredPassword = document.getElementById('pw').value;

        var userFound = users.some(function(user) {
            return user.email === enteredEmail && user.password === enteredPassword;
        });

        if (userFound) {
            console.log("before alert")
            alert("Login successful!");
            sessionStorage.setItem('user', JSON.stringify({ email: enteredEmail }));
            console.log("after alert")
            window.location.href = "./index.html"

        } else {
            alert("Invalid email or password!");
            event.preventDefault();
        }
    } else {
        event.preventDefault();
    }
}

// filter


// price filter



// var lowerSlider = document.querySelector('#lower'),
//     upperSlider = document.querySelector('#upper'),
//     lowerVal = parseInt(lowerSlider.value);
// upperVal = parseInt(upperSlider.value);

// upperSlider.oninput = function() {
//     lowerVal = parseInt(lowerSlider.value);
//     upperVal = parseInt(upperSlider.value);

//     if (upperVal < lowerVal + 4) {
//         lowerSlider.value = upperVal - 4;

//         if (lowerVal == lowerSlider.min) {
//             upperSlider.value = 4;
//         }
//     }
// };


// lowerSlider.oninput = function() {
//     lowerVal = parseInt(lowerSlider.value);
//     upperVal = parseInt(upperSlider.value);

//     if (lowerVal > upperVal - 4) {
//         upperSlider.value = lowerVal + 4;

//         if (upperVal == upperSlider.max) {
//             lowerSlider.value = parseInt(upperSlider.max) - 4;
//         }

//     }
// };

// var output = document.getElementById("min");
// output.innerHTML = lowerSlider.value;

// var output1 = document.getElementById("max");
// output1.innerHTML = upperSlider.value;

// lowerSlider.oninput = function() {
//     output.innerHTML = this.value;
// }

// upperSlider.oninput = function() {
//     output1.innerHTML = this.value;
// }


// more button
function redirectToMoreDesigns() {
    const links = [
        "file:///D:/Projects/E-commerce-website/water%20bottle%20more%20products.html",
        "file:///D:/Projects/E-commerce-website/glass%20case%20more%20products.html",
        "file:///D:/Projects/E-commerce-website/floral%20blossom%20with%20holder%20more%20products.html",
        "file:///D:/Projects/E-commerce-website/customisable%20iphone%20more%20products.html"
    ];

    // links random code
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];

    window.location.href = selectedLink;
}
// cart 
function opencart() {
    document.getElementById("chartnav").style.width = "400px";
}

function closecart() {
    document.getElementById("chartnav").style.width = "0";
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    var savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

loadCartFromLocalStorage();


function clearCartAndLocalStorage() {
    cart = [];
    updateCartDisplay();
    localStorage.removeItem('cart');
}

var cart = [];

function addToCart(productName, price, imageUrl) {
    console.log('addToCart called');
    var existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        var item = { name: productName, price: parseFloat(price), quantity: 1, gift: false, letter: '', image: imageUrl };
        cart.push(item);
    }

    updateCartDisplay();
    updateAddToCartButtonText();
    saveCartToLocalStorage();
}

function updateAddToCartButtonText() {
    var addToCartButton = document.getElementById('addToCartButton');

    if (cart.length > 0) {
        var totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

        addToCartButton.innerHTML = `
            <button style="width:50px;height:50px;background-color:white" onclick="decreaseQuantityInCart()">-</button>
            <span>${totalQuantity}</span>
            <button style="width:5px;height:5px;background-color:white" onclick="increaseQuantityInCart()">+</button>
        `;
    } else {
        addToCartButton.textContent = 'Add to Cart';
    }
}

function updateCartDisplay() {
    cart = JSON.parse(localStorage.getItem("cart"))
    var cartItems = document.getElementById('cartItems');
    var cartTotalContainer = document.getElementById('cartTotalContainer');
    var checkoutButtonContainer = document.getElementById('checkoutButtonContainer');
    var total = 0;
    console.log("in func", cart)

    cartItems.innerHTML = '';
    if (cart.length === 0) {
        console.log("in if", cart)

        cartItems.innerHTML = '<p style="margin: 30px; font-size: x-large">No items in the cart.</p>';
        checkoutButtonContainer.style.display = 'none';
        cartTotalContainer.innerHTML = '';
    } else {
        console.log("in else", cart)

        cart.forEach((item, index) => {
                    var listItem = document.createElement('div');
                    listItem.innerHTML = `
                <div class="pur-details">
                    <img src="${item.image}" alt="${item.name}" style="width: 150px; height: 150px; margin-right: 10px;">
                    <div class="item-price">
                        <p>${item.name}</p>
                        <p>Price: Rs. ${item.price.toFixed(2)}</p>
                        <p>Quantity: 
                            <button onclick="decreaseQuantity(${index})">-</button>
                            ${item.quantity}
                            <button onclick="increaseQuantity(${index})">+</button>
                        </p>
                    </div>
                </div>
                <div class="gift">
                    <label><input type="checkbox" id="checkbox" onclick="toggleGift(${index})"> Gift</label>
                    ${item.gift ? `<input type="text" placeholder="Add a letter" id="txt" onchange="updateLetter(${index}, this.value)">` : ''}
                    <button onclick="removeFromCart(${index})"><img src="./remove.png" style="width:30px;height:30px;"></button>
                </div>
            `;
            cartItems.appendChild(listItem);

            total += item.price * item.quantity;
        });

        var cartTotal = document.createElement('div');
        cartTotal.innerHTML = `Total: Rs. ${total.toFixed(2)}`;
        cartTotalContainer.innerHTML = '';
        cartTotalContainer.appendChild(cartTotal);

        var checkoutButton = document.createElement('button');
        checkoutButton.textContent = 'Checkout';
        checkoutButton.onclick = checkout;
        checkoutButtonContainer.innerHTML = '';
        checkoutButtonContainer.appendChild(checkoutButton);
        checkoutButtonContainer.style.display = 'block';

        saveCartToLocalStorage(); 
    }
    var totalAllProducts = document.getElementById('totalAllProducts');
    totalAllProducts.innerHTML = `Total: Rs. ${total.toFixed(2)}`;

}


function toggleGift(index) {
    cart[index].gift = !cart[index].gift;
    updateCartDisplay();
}

function updateLetter(index, letter) {
    cart[index].letter = letter;
}

function removeFromCart(index) {
    console.log('Removing item from cart at index:', index);
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function checkout() {
    console.log('Checkout:', cart);
    cart = [];
    updateCartDisplay();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartDisplay();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }
    updateCartDisplay();
}

var cartTotalContainer = document.createElement('div');
cartTotalContainer.id = 'cartTotalContainer';
document.querySelector('.add-chart').appendChild(cartTotalContainer);

var checkoutButtonContainer = document.createElement('div');
checkoutButtonContainer.id = 'checkoutButtonContainer';
document.querySelector('.add-chart').appendChild(checkoutButtonContainer);

updateCartDisplay();

window.onload = updateCartDisplay()


// sorting


var currentSortCriterion = 'featured';

function sortProducts(criterion) {
    console.log('Sorting:', criterion);
    currentSortCriterion = criterion;

    var productsContainer = document.querySelector('.product-grid1');
    var products = Array.from(productsContainer.querySelectorAll('.product'));

    products.sort(function(a, b) {
        var productA, productB;


        switch (currentSortCriterion) {
            case 'featured':

                return 0;

            case 'price-low-to-high':
                productA = parseFloat(a.querySelector('span').textContent.slice(1));
                productB = parseFloat(b.querySelector('span').textContent.slice(1));
                return productA - productB;

            case 'price-high-to-low':
                productA = parseFloat(a.querySelector('span').textContent.slice(1));
                productB = parseFloat(b.querySelector('span').textContent.slice(1));
                return productB - productA;

            case 'name-a-to-z':
                productA = a.querySelector('h3').textContent.toLowerCase();
                productB = b.querySelector('h3').textContent.toLowerCase();
                return productA.localeCompare(productB);

            case 'name-z-to-a':
                productA = a.querySelector('h3').textContent.toLowerCase();
                productB = b.querySelector('h3').textContent.toLowerCase();
                return productB.localeCompare(productA);

            default:
                return 0;
        }
    });

    productsContainer.innerHTML = '';

    products.forEach(function(product) {
        productsContainer.appendChild(product);
    });
}

sortProducts('featured');


// search

const products = [
    { name: "Watercolor Flower", price: 999, image: "./Watercolor Flower.webp" },
    { name: "Watercolor Floral Pattern", price: 999, image: "./watercolor floral.webp" },
    // Add more products here
];


//  review

function openPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

function submitReview() {
    // Get values from the form
    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var image = document.getElementById('image').value;
    var reviewText = document.getElementById('review').value;

    // Create review HTML
    var reviewContainer = document.querySelector('.review-section1');

    var reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review1');

    var userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info1');

    var avatarImg = document.createElement('img');
    avatarImg.src = "./user.png";
    avatarImg.alt = 'User Avatar';

    var nameParagraph = document.createElement('p');
    nameParagraph.textContent = name;

    var ratingParagraph = document.createElement('p');
    ratingParagraph.textContent = '⭐'.repeat(rating);

    var reviewTextParagraph = document.createElement('p');
    reviewTextParagraph.classList.add('review-text1');
    reviewTextParagraph.textContent = reviewText;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        removeReview(this);
    };

    // Append elements
    userInfoDiv.appendChild(avatarImg);
    userInfoDiv.appendChild(nameParagraph);
    userInfoDiv.appendChild(document.createElement('br'));
    userInfoDiv.appendChild(ratingParagraph);

    reviewDiv.appendChild(userInfoDiv);
    reviewDiv.appendChild(reviewTextParagraph);
    reviewDiv.appendChild(removeButton);

    reviewContainer.appendChild(reviewDiv);

    // Save to local storage (you might want to use a more sophisticated approach)
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ name, rating, image, reviewText });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Close the popup
    closePopup();
}



function removeReview(button) {
    // Remove the review from the container
    var reviewNode = button.parentNode;
    reviewNode.parentNode.removeChild(reviewNode);

    // Remove from local storage
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    var index = Array.from(reviewNode.parentNode.children).indexOf(reviewNode);
    reviews.splice(index, 1);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}