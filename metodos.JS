// Example product data
const products = [
    { id: 1, name: "Camiseta 1", image: "https://via.placeholder.com/200x200", price: "$20" },
    { id: 2, name: "Camiseta 2", image: "https://via.placeholder.com/200x200", price: "$25" },
    { id: 3, name: "Camiseta 3", image: "https://via.placeholder.com/200x200", price: "$30" }
];

const cart = [];

// Load products dynamically
function loadProducts() {
    const productSection = document.getElementById("productSection");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productSection.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} añadido al carrito`);
}

// Open login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
}

// Close login modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
}

// Open cart
function openCart() {
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - ${item.price}</li>`).join("");
    cartModal.style.display = "block";
}

// Close cart
function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

// Initialize app
document.addEventListener("DOMContentLoaded", loadProducts);
