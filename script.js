let cart = [];

let wishlist = [];

let selectedProduct = "";

let selectedPrice = 0;


/* =========================
   CART
========================= */

function addToCart(name, price) {

    const existing = cart.find(
        item => item.name === name
    );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(
        name + " added to cart! 🛒"
    );
}


function updateCart() {

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    document.getElementById(
        "cartCount"
    ).textContent = totalQuantity;

    displayCart();
}


function displayCart() {

    const container =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");

    container.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        container.innerHTML = `
            <p class="empty">
                Your cart is empty 🌱
            </p>
        `;

        totalElement.textContent = "₹0";

        return;
    }


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        container.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </p>

                </div>

                <div>

                    <strong>
                        ₹${itemTotal}
                    </strong>

                    <button
                        class="remove"
                        onclick="removeFromCart(${index})">

                        Remove

                    </button>

                </div>

            </div>

        `;

    });


    totalElement.textContent =
        "₹" + total;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document.getElementById(
        "cartModal"
    ).style.display = "flex";

    displayCart();
}


function closeCart() {

    document.getElementById(
        "cartModal"
    ).style.display = "none";
}


/* =========================
   CART CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;
    }


    let total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    selectedProduct =
        cart.map(
            item =>
                `${item.name} x${item.quantity}`
        ).join(", ");


    selectedPrice = total;


    closeCart();


    document.getElementById(
        "paymentProduct"
    ).textContent =
        selectedProduct;


    document.getElementById(
        "paymentAmount"
    ).textContent =
        selectedPrice;


    document.getElementById(
        "payButtonAmount"
    ).textContent =
        selectedPrice;


    document.getElementById(
        "paymentModal"
    ).style.display = "flex";
}


/* =========================
   BUY NOW
========================= */

function buyNow(name, price) {

    selectedProduct = name;

    selectedPrice = price;


    document.getElementById(
        "paymentProduct"
    ).textContent = name;


    document.getElementById(
        "paymentAmount"
    ).textContent = price;


    document.getElementById(
        "payButtonAmount"
    ).textContent = price;


    document.getElementById(
        "paymentModal"
    ).style.display = "flex";


    selectPayment("upi");
}


/* =========================
   PAYMENT CLOSE
========================= */

function closePayment() {

    document.getElementById(
        "paymentModal"
    ).style.display = "none";
}


/* =========================
   PAYMENT METHOD
========================= */

function selectPayment(method) {

    const upiOption =
        document.getElementById("upiOption");

    const codOption =
        document.getElementById("codOption");

    const upiPayment =
        document.getElementById("upiPayment");

    const codPayment =
        document.getElementById("codPayment");


    if (method === "upi") {

        upiOption.classList.add(
            "active"
        );

        codOption.classList.remove(
            "active"
        );

        upiPayment.style.display =
            "block";

        codPayment.style.display =
            "none";

    } else {

        codOption.classList.add(
            "active"
        );

        upiOption.classList.remove(
            "active"
        );

        upiPayment.style.display =
            "none";

        codPayment.style.display =
            "block";
    }
}


/* =========================
   UPI APP
========================= */

function selectUpiApp(app) {

    document.getElementById(
        "upiId"
    ).placeholder =
        "Enter " + app + " UPI ID";

    document.getElementById(
        "upiId"
    ).focus();
}


/* =========================
   UPI PAYMENT
========================= */

function processUpiPayment() {

    const upiId =
        document.getElementById(
            "upiId"
        ).value.trim();


    if (upiId === "") {

        alert(
            "Please enter your UPI ID."
        );

        return;
    }


    if (!upiId.includes("@")) {

        alert(
            "Please enter a valid UPI ID.\n\nExample: name@upi"
        );

        return;
    }


    /*
       DEMO PAYMENT

       This frontend code does not
       actually transfer money.
    */


    alert(
        "UPI payment initiated!\n\n" +
        "Product: " +
        selectedProduct +
        "\nAmount: ₹" +
        selectedPrice +
        "\nUPI: " +
        upiId
    );


    alert(
        "Demo payment successful! 🌱\n\n" +
        "Order placed successfully."
    );


    cart = [];

    updateCart();

    closePayment();
}


/* =========================
   CASH ON DELIVERY
========================= */

function placeCodOrder() {

    alert(
        "Order placed successfully! 📦\n\n" +
        "Product: " +
        selectedProduct +
        "\nAmount: ₹" +
        selectedPrice +
        "\nPayment: Cash on Delivery"
    );


    cart = [];

    updateCart();

    closePayment();
}


/* =========================
   WISHLIST
========================= */

function addWishlist(name) {

    if (!wishlist.includes(name)) {

        wishlist.push(name);

        alert(
            name +
            " added to your wishlist ❤️"
        );

    } else {

        alert(
            name +
            " is already in your wishlist."
        );
    }


    document.getElementById(
        "wishlistCount"
    ).textContent =
        wishlist.length;
}


function showWishlist() {

    if (wishlist.length === 0) {

        alert(
            "Your wishlist is empty ❤️"
        );

        return;
    }


    alert(
        "Wishlist:\n\n" +
        wishlist.join("\n")
    );
}


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(category) {

    const products =
        document.querySelectorAll(
            ".product-card"
        );

    const buttons =
        document.querySelectorAll(
            ".filter-buttons button"
        );


    products.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (
            category === "All" ||
            productCategory === category
        ) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";
        }

    });


    buttons.forEach(button => {

        button.classList.remove(
            "active"
        );


        if (
            button.textContent.trim()
            === category
        ) {

            button.classList.add(
                "active"
            );
        }

    });


    document.getElementById(
        "plants"
    ).scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   SEARCH
========================= */

function openSearch() {

    document.getElementById(
        "searchBox"
    ).style.display =
        "block";

    document.getElementById(
        "searchInput"
    ).focus();
}


function closeSearch() {

    document.getElementById(
        "searchBox"
    ).style.display =
        "none";
}


function searchPlants() {

    const search =
        document.getElementById(
            "searchInput"
        ).value.toLowerCase();


    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(product => {

        const name =
            product
                .querySelector("h3")
                .textContent
                .toLowerCase();


        if (name.includes(search)) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";
        }

    });
}


/* =========================
   NEWSLETTER
========================= */

function subscribe() {

    const email =
        document.getElementById(
            "email"
        ).value.trim();


    if (email === "") {

        alert(
            "Please enter your email."
        );

        return;
    }


    alert(
        "Successfully subscribed! 🌿"
    );


    document.getElementById(
        "email"
    ).value = "";
}


/* =========================
   CONTACT
========================= */

function contactSubmit(event) {

    event.preventDefault();


    alert(
        "Thank you! Your message has been sent."
    );


    event.target.reset();
}


/* =========================
   OUTSIDE CLICK
========================= */

window.onclick = function(event) {

    const cartModal =
        document.getElementById(
            "cartModal"
        );

    const paymentModal =
        document.getElementById(
            "paymentModal"
        );


    if (event.target === cartModal) {

        closeCart();
    }


    if (event.target === paymentModal) {

        closePayment();
    }

};