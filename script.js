
const products = [

    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "Electronics",
        price: 12999,
        oldPrice: 16999,
        rating: 4.8,
        badge: "Best Seller",
        image: "./images/Headphone.jpg",
        description: "Premium wireless headphones with immersive sound, comfortable cushions and long battery life."
    },

    {
        id: 2,
        name: "Smart Watch Series 8",
        category: "Electronics",
        price: 18499,
        oldPrice: 22999,
        rating: 4.7,
        badge: "New",
        image: "./images/Smart Watch.jpg",
        description: "Modern smartwatch with health tracking, notifications and a premium display."
    },

    {
        id: 3,
        name: "Classic Running Shoes",
        category: "Shoes",
        price: 7499,
        oldPrice: 9999,
        rating: 4.6,
        badge: "Sale",
        image: "./images/Shoes.jpg",
        description: "Lightweight running shoes designed for comfort, performance and everyday use."
    },

    {
        id: 4,
        name: "Minimal Leather Watch",
        category: "Accessories",
        price: 8999,
        oldPrice: 11999,
        rating: 4.9,
        badge: "Popular",
        image: "./images/Watch.jpg",
        description: "Elegant leather watch with a clean minimal design suitable for formal and casual wear."
    },

    {
        id: 5,
        name: "Premium Denim Jacket",
        category: "Fashion",
        price: 5999,
        oldPrice: 7999,
        rating: 4.5,
        badge: "Trending",
        image: "./images/Jacket.jpg",
        description: "Premium denim jacket with a timeless design and comfortable everyday fit."
    },

    {
        id: 6,
        name: "Modern Backpack",
        category: "Accessories",
        price: 4499,
        oldPrice: 5999,
        rating: 4.7,
        badge: "New",
        image: "./images/Backpack.jpg",
        description: "Durable everyday backpack with multiple compartments for work, travel and study."
    },

    {
        id: 7,
        name: "Premium Sunglasses",
        category: "Accessories",
        price: 3999,
        oldPrice: 5499,
        rating: 4.6,
        badge: "Popular",
        image: "./images/Sun Glasses.jpg",
        description: "Modern sunglasses combining premium style with everyday comfort."
    },

    {
        id: 8,
        name: "Running Sports Shoes",
        category: "Shoes",
        price: 8499,
        oldPrice: 10999,
        rating: 4.8,
        badge: "Best Seller",
        image: "./images/Sports shoes.jpg",
        description: "Performance sports shoes built for running, training and everyday movement."
    },

    {
        id: 9,
        name: "Modern Casual Shirt",
        category: "Fashion",
        price: 2999,
        oldPrice: 3999,
        rating: 4.4,
        badge: "Sale",
        image: "./images/Shirt.jpg",
        description: "Comfortable casual shirt with a clean modern fit."
    },

    {
        id: 10,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 6499,
        oldPrice: 8999,
        rating: 4.7,
        badge: "Hot",
        image: "./images/Earbuds black.jpg",
        description: "Compact wireless earbuds with clear audio and a convenient charging case."
    },

    {
        id: 11,
        name: "Modern Coffee Tumbler",
        category: "Accessories",
        price: 1999,
        oldPrice: 2799,
        rating: 4.5,
        badge: "New",
        image: "./images/Tumbler.jpg",
        description: "Reusable insulated tumbler designed to keep your drinks at the right temperature."
    },

    {
        id: 12,
        name: "Classic White Sneakers",
        category: "Shoes",
        price: 6999,
        oldPrice: 8999,
        rating: 4.7,
        badge: "Popular",
        image: "./images/Sneakers.jpg",
        description: "Classic white sneakers with a clean design for everyday outfits."
    }

];



let cart = JSON.parse(localStorage.getItem("cart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

let filteredProducts = [...products];



const productsGrid =
    document.getElementById("productsGrid");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortFilter =
    document.getElementById("sortFilter");

const priceRange =
    document.getElementById("priceRange");

const priceValue =
    document.getElementById("priceValue");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const overlay =
    document.getElementById("overlay");

const toast =
    document.getElementById("toast");



function formatPrice(price) {

    return `Rs. ${price.toLocaleString()}`;

}



function saveData() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}



function renderProducts(list = products) {

    productsGrid.innerHTML = "";

    if (list.length === 0) {

        noProducts.style.display = "block";

        return;
    }

    noProducts.style.display = "none";


    list.forEach(product => {

        const isWishlisted =
            wishlist.includes(product.id);


        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>


                <button
                    class="product-wishlist ${isWishlisted ? "active" : ""}"
                    data-wishlist="${product.id}"
                    aria-label="Add to wishlist"
                >

                    <svg viewBox="0 0 24 24">

                        <path d="M20.8 8.7C20.8 13.5 12 20 12 20S3.2 13.5 3.2 8.7C3.2 5.7 5.4 4 8 4C9.7 4 11.2 4.8 12 6C12.8 4.8 14.3 4 16 4C18.6 4 20.8 5.7 20.8 8.7Z"></path>

                    </svg>

                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>


                <div class="rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    <span>
                        ${product.rating}
                    </span>

                </div>


                <div class="product-price">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <del>
                        ${formatPrice(product.oldPrice)}
                    </del>

                </div>


                <button
                    class="add-cart"
                    data-add="${product.id}"
                >
                    Add to Cart
                </button>

            </div>

        `;


        card.addEventListener("dblclick", () => {

            openProductModal(product.id);

        });


        productsGrid.appendChild(card);

    });

}



function filterProducts() {

    const search =
        searchInput.value.toLowerCase().trim();

    const category =
        categoryFilter.value;

    const maxPrice =
        Number(priceRange.value);


    filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search);

        const matchesCategory =
            category === "All" ||
            product.category === category;

        const matchesPrice =
            product.price <= maxPrice;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice
        );

    });


    sortProducts();

}



function sortProducts() {

    const sort =
        sortFilter.value;


    if (sort === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }


    if (sort === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }


    if (sort === "rating") {

        filteredProducts.sort(
            (a, b) => b.rating - a.rating
        );

    }


    if (sort === "name") {

        filteredProducts.sort(
            (a, b) => a.name.localeCompare(b.name)
        );

    }


    renderProducts(filteredProducts);

}



function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveData();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}



function changeQuantity(productId, amount) {

    const item =
        cart.find(
            item => item.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== productId
            );

    }


    saveData();

    updateCart();

}



function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );


    saveData();

    updateCart();

    showToast("Product removed from cart");

}



function updateCart() {

    cartItems.innerHTML = "";


    let total = 0;

    let quantityCount = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>

                    <h3>Your cart is empty</h3>

                    <p>
                        Add some products to get started.
                    </p>

                </div>

            </div>

        `;

    }


    cart.forEach(item => {

        const product =
            products.find(
                product => product.id === item.id
            );


        if (!product) return;


        const itemTotal =
            product.price * item.quantity;


        total += itemTotal;

        quantityCount += item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div>

                <h4>
                    ${product.name}
                </h4>

                <div class="cart-item-price">

                    ${formatPrice(itemTotal)}

                </div>


                <div class="quantity-control">

                    <button
                        data-decrease="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-increase="${product.id}"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-item"
                    data-remove="${product.id}"
                >
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        formatPrice(total);


    cartCount.textContent =
        quantityCount;


    wishlistCount.textContent =
        wishlist.length;

}



function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(
                id => id !== productId
            );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist");

    }


    saveData();

    updateCart();

    renderProducts(filteredProducts);

}



function openWishlist() {

    const wishlistItems =
        document.getElementById("wishlistItems");


    wishlistItems.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

            <div class="empty-cart">

                <p>
                    Your wishlist is empty.
                </p>

            </div>

        `;

    }


    wishlist.forEach(id => {

        const product =
            products.find(
                product => product.id === id
            );


        if (!product) return;


        const item =
            document.createElement("div");


        item.className = "wishlist-item";


        item.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ${formatPrice(product.price)}
                </p>

            </div>


            <button
                class="add-cart"
                data-add="${product.id}"
            >
                Add
            </button>

        `;


        wishlistItems.appendChild(item);

    });


    document
        .getElementById("wishlistModal")
        .classList.add("active");

}



function openProductModal(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const productDetails =
        document.getElementById("productDetails");


    productDetails.innerHTML = `

        <div class="product-detail">

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <span class="product-category">
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    ${product.rating}

                </div>

                <p>
                    ${product.description}
                </p>

                <div class="detail-price">
                    ${formatPrice(product.price)}
                </div>

                <button
                    class="checkout-btn"
                    data-add="${product.id}"
                >
                    Add to Cart
                </button>

            </div>

        </div>

    `;


    document
        .getElementById("productModal")
        .classList.add("active");

}



function openCart() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

}


function closeCart() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

}



let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

}



document.addEventListener("click", event => {



    const addButton =
        event.target.closest("[data-add]");


    if (addButton) {

        addToCart(
            Number(addButton.dataset.add)
        );

        return;

    }



    const wishlistButton =
        event.target.closest("[data-wishlist]");


    if (wishlistButton) {

        toggleWishlist(
            Number(wishlistButton.dataset.wishlist)
        );

        return;

    }



    const increaseButton =
        event.target.closest("[data-increase]");


    if (increaseButton) {

        changeQuantity(
            Number(increaseButton.dataset.increase),
            1
        );

        return;

    }



    const decreaseButton =
        event.target.closest("[data-decrease]");


    if (decreaseButton) {

        changeQuantity(
            Number(decreaseButton.dataset.decrease),
            -1
        );

        return;

    }



    const removeButton =
        event.target.closest("[data-remove]");


    if (removeButton) {

        removeFromCart(
            Number(removeButton.dataset.remove)
        );

        return;

    }



    const closeButton =
        event.target.closest("[data-close]");


    if (closeButton) {

        document
            .getElementById(
                closeButton.dataset.close
            )
            .classList.remove("active");

    }

});



searchInput.addEventListener(
    "input",
    filterProducts
);


categoryFilter.addEventListener(
    "change",
    filterProducts
);


sortFilter.addEventListener(
    "change",
    filterProducts
);



priceRange.addEventListener(
    "input",
    () => {

        priceValue.textContent =
            formatPrice(
                Number(priceRange.value)
            );

        filterProducts();

    }
);



document
    .getElementById("clearFilters")
    .addEventListener("click", () => {

        searchInput.value = "";

        categoryFilter.value = "All";

        sortFilter.value = "default";

        priceRange.value = 50000;

        priceValue.textContent =
            formatPrice(50000);

        filterProducts();

    });



document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            categoryFilter.value =
                card.dataset.category;

            filterProducts();

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });



document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById("continueShopping")
    .addEventListener(
        "click",
        closeCart
    );


overlay.addEventListener(
    "click",
    closeCart
);



document
    .getElementById("wishlistBtn")
    .addEventListener(
        "click",
        openWishlist
    );



const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );

});


if (
    localStorage.getItem("darkMode") === "true"
) {

    document.body.classList.add("dark");

}



const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");


mobileMenu.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

        });

    });



document
    .getElementById("navSearchBtn")
    .addEventListener("click", () => {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });


        setTimeout(() => {

            searchInput.focus();

        }, 600);

    });



document
    .getElementById("checkoutBtn")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        closeCart();


        document
            .getElementById("checkoutModal")
            .classList.add("active");

    });



document
    .getElementById("checkoutForm")
    .addEventListener("submit", event => {

        event.preventDefault();


        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        cart = [];

        saveData();

        updateCart();


        document
            .getElementById("checkoutModal")
            .classList.remove("active");


        document
            .getElementById("successModal")
            .classList.add("active");


        event.target.reset();

    });



document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });



renderProducts();

updateCart();

priceValue.textContent =
    formatPrice(
        Number(priceRange.value)
    );