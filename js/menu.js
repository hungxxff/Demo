const productCart = JSON.parse(localStorage.getItem('cart')) || [];
let cartQuantity = 0; // Số lượng sản phẩm trong giỏ hàng

// Lắng nghe sự kiện click cho tất cả nút thêm vào giỏ hàng
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cart-btn').forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(e.target.closest('.product-card'));
        });
    });
});


// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productCard) {
    const productImage = productCard.querySelector('.product-image').src;
    const title = productCard.querySelector('.title').innerText;
    const description = productCard.querySelector('.description').innerText;
    const price = productCard.querySelector('.price').innerText;
    const stock = 1
    // Thêm sản phẩm vào mảng productCart
    productCart.push({
        productImage,
        title,
        description,
        price,
        stock
    });

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    cartQuantity = productCart.length;
    document.querySelector('.cart-quantity').innerText = cartQuantity;

    // Lưu dữ liệu vào localStorage
    localStorage.setItem('cart', JSON.stringify(productCart));

    alert("Sản phẩm đã được thêm vào giỏ hàng:", productCart);
    updateCartUI();
}


function updateCartUI() {
    const cartPopup = document.querySelector('.cart-popup .cart-items');
    cartPopup.innerHTML = '';  // Clear previous items

    productCart.forEach(product => {
        const itemHTML = `
            <div class="cart-item">
                <img src="${product.productImage}" alt="${product.title}">
                <div class="cart-item-title">${product.title}</div>
                <div class="cart-item-price">${product.price}</div>
            </div>
        `;
        cartPopup.innerHTML += itemHTML;
    });
    
    // Cập nhật sự kiện cho nút "Đến giỏ hàng"
    document.querySelector('.cart-link').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}
