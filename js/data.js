const foodData = [
    {
        imgSrc: "images/f1.png",
        title: "Pizza cơ bản",
        description: "Một phần pizza cơ bản vừa đủ cho từ 2-3 người, mang cho mình một hương vị đặc trưng của pizza Ý cùng nước sốt đặc biệt, hương vị thỏa mãn mọi đam mê",
        price: "300.000Đ",
        category: "pizza",
        stock: "0"
    },
    {
        imgSrc: "images/f2.png",
        title: "Burger Ý",
        description: "Hương vị thượng hạng đến từ những thành phần tốt nhất từ thịt bò mỹ, rau và cà chua tươi, cùng với lớp vỏ bánh được nướng giòn tạo nên sự kết hợp hoàn hảo",
        price: "150.000Đ",
        category: "burger",
        stock: "0"
    },
    {
        imgSrc: "images/f3.png",
        title: "Pizza Việt Quất",
        description: "Sự sáng tạo mới mẻ, mang cho mình hương vị tự nhiên cùng chút chua thanh của trái việt quất, cùng sự giòn rụm của vỏ bánh và lá bạc hà",
        price: "250.000Đ",
        category: "pizza",
        stock: "0"
    },
    {
        imgSrc: "images/f4.png",
        title: "Mì Ý",
        description: "Mì Ý sốt bò bằm, với phần nước sốt đậm đà mang hương vị Ý nguyên bản, sự lựa chọn hợp lý cho những tín đồ ăn mì",
        price: "400.000Đ",
        category: "pasta",
        stock: "0"
    },
    {
        imgSrc: "images/f5.png",
        title: "Burger gà cay",
        description: "Phần burger gà cay đậm đà, được tẩm ướp theo công thức độc quyền của quán, kết hợp với bánh mì giòn và rau xanh tươi mát",
        price: "180.000Đ",
        category: "burger",
        stock: "0"
    },
    {
        imgSrc: "images/f6.png",
        title: "Pizza Hải Sản",
        description: "Pizza kết hợp hài hòa giữa hải sản tươi ngon và các loại gia vị đặc trưng, mang lại hương vị đậm đà và khó quên",
        price: "350.000Đ",
        category: "pizza",
        stock: "0"
    },
    {
        imgSrc: "images/f7.png",
        title: "Mì Ý Sốt Kem",
        description: "Mì Ý sốt kem ngậy, kết hợp hoàn hảo giữa phô mai và thịt xông khói, tạo nên hương vị đặc trưng khó cưỡng",
        price: "380.000Đ",
        category: "pasta",
        stock: "0"
    },
    {
        imgSrc: "images/f8.png",
        title: "Burger Phô Mai",
        description: "Burger phô mai ngon miệng với miếng thịt bò nướng vừa chín tới, phô mai tan chảy và bánh mì giòn rụm",
        price: "200.000Đ",
        category: "burger",
        stock: "0"
    },
    {
        imgSrc: "images/f9.png",
        title: "Pizza Phô Mai",
        description: "Pizza phô mai với lớp vỏ bánh mỏng giòn, sốt cà chua và nhiều loại phô mai hảo hạng kết hợp hoàn hảo",
        price: "320.000Đ",
        category: "pizza",
        stock: "0"
    }
];


function renderFoodItems() {
    const container = document.querySelector('.filters-content .grid');

    // Xóa nội dung cũ nếu có
    container.innerHTML = '';

    // Duyệt qua dữ liệu và tạo phần tử HTML
    foodData.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('col-sm-6', 'col-lg-4', 'all', item.category);

        foodItem.innerHTML = `
                <div class="box product-card">
                    <div>
                        <div class="img-box">
                            <img class="product-image" src="${item.imgSrc}" alt="${item.title}">
                        </div>
                        <div class="detail-box">
                            <h5 class="title">${item.title}</h5>
                            <p class="description">${item.description}</p>
                            <div class="options">
                                <h6 class="price">${item.price}</h6>
                                <button class="cart-btn">
                                    <svg viewBox="0 0 456.029 456.029">
                                        <g>
                                            <g>
                                                <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248s23.552,53.248,53.248,53.248,53.248-23.552,53.248-53.248S374.784,338.862,345.6,338.862z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48c-11.264,0-20.48,9.216-20.48,20.48s9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4C457.728,97.71,450.56,86.958,439.296,84.91z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688-29.696,1.536-52.224,26.112-51.2,55.296s24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        container.appendChild(foodItem);
    });
}
// Gọi hàm render khi trang đã tải xong
document.addEventListener('DOMContentLoaded', renderFoodItems);


