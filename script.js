// Sample products - replace with your real photos
const products = [
    {
        id: 1,
        name: "Mountain Mist",
        price: 49.99,
        image: "https://picsum.photos/id/1015/600/600",
        description: "Serene mountain landscape at dawn"
    },
    {
        id: 2,
        name: "Ocean Horizon",
        price: 59.99,
        image: "https://picsum.photos/id/1018/600/600",
        description: "Calming coastal view"
    },
    {
        id: 3,
        name: "Forest Canopy",
        price: 44.99,
        image: "https://picsum.photos/id/133/600/600",
        description: "Lush green woodland"
    },
    {
        id: 4,
        name: "Desert Dunes",
        price: 54.99,
        image: "https://picsum.photos/id/1016/600/600",
        description: "Golden sand waves"
    }
];

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Simple cart functionality
let cart = [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const countEl = document.querySelector('.cart-btn');
    if (countEl) countEl.textContent = `🛒 Cart (${cart.length})`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});
