// checkout.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Render cart items
    const cartItemsContainer = document.getElementById('cart-items-container');
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = ''; // Clear previous items

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.productImage}" alt="${item.title}">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
            <span class="stock-count"></span>
            <div class="count-item">
                <svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                <svg class="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
            </div>
    `;

        cartItemsContainer.appendChild(cartItem);
        // Update the stock display
        const stockCountElement = cartItem.querySelector('.stock-count');
        
        cartItem.querySelector('.plus').addEventListener('click', e => {
            e.preventDefault();
            item.stock += 1;
            stockCountElement.innerText = item.stock;
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateTotalPrice(cartItems);
        });

        cartItem.querySelector('.minus').addEventListener('click', e => {
            e.preventDefault();
            if (item.stock > 0) {
                item.stock -= 1;
                stockCountElement.innerText = item.stock;
                localStorage.setItem('cart', JSON.stringify(cartItems));
                updateTotalPrice(cartItems);
            }
        });

        totalPrice += parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    });
    function updateTotalPrice(cartItems) {
        totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += (parseInt(item.price.replace(/[^0-9]/g, ''), 10) * item.stock);
        });
        document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN') + 'đ';
    }
    updateTotalPrice(cartItems);
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        window.location.href = 'paid.html';
    });
});
