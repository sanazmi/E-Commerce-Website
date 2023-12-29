// filter
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var arrowIcon = document.getElementById("arrowIcon");
    console.log(sidenav)

    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
        // document.getElementById("filterDiv").style.marginLeft = "0";
        arrowIcon.classList.remove("rotate");
    } else {
        sidenav.style.width = "250px";
        // document.getElementById("filterDiv").style.marginLeft = "250px";
        arrowIcon.classList.add("rotate");
    }
}

// price filter
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var arrowIcon = document.getElementById("arrowIcon");

    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        arrowIcon.classList.remove("rotate");
    } else {
        sidenav.style.width = "250px";
        document.getElementById("main").style.marginLeft = "0px";
        arrowIcon.classList.add("rotate");
    }
}


var lowerSlider = document.querySelector('#lower'),
    upperSlider = document.querySelector('#upper'),
    lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function() {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;

        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4;
        }
    }
};


lowerSlider.oninput = function() {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;

        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }

    }
};

var output = document.getElementById("min");
output.innerHTML = lowerSlider.value;

var output1 = document.getElementById("max");
output1.innerHTML = upperSlider.value;

lowerSlider.oninput = function() {
    output.innerHTML = this.value;
}

upperSlider.oninput = function() {
    output1.innerHTML = this.value;
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
    // tochangeadded tocart
    var addToCartButton = document.getElementById('addToCartButton');
    addToCartButton.textContent = 'Added to Cart';

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
    var cartItems = document.getElementById('cartItems');
    var cartTotalContainer = document.getElementById('cartTotalContainer');
    var checkoutButtonContainer = document.getElementById('checkoutButtonContainer');
    var total = 0;

    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="margin: 30px; font-size: x-large">No items in the cart.</p>';
        checkoutButtonContainer.style.display = 'none';
        cartTotalContainer.innerHTML = '';
    } else {
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
    var totalAllProducts = document.getElementById('cartTotal');
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
    cart.splice(index, 1);
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

// updateCartDisplay();


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

// Function to search products by name
function searchProducts() {
    const searchTerm = prompt("Enter product name to search:");
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Redirect to the search page with search results
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
    window.location.href = "search.html";
}