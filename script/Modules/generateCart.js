import getData from "./getData.js";
import userData from "./userData.js";

const generateCart = () => {
    const createCard = data => {
        console.log(data);
        const cartListItems = document.querySelector('.cart-list'),
            cartTotalPrice = document.querySelector('.cart-total-price');

        let totalPreice = 0;

        if (!data) {
            cartListItems.innerHTML = '<h2>Корзина пуста</h2>';
        } else {
            let listItem = '';

            data.forEach(item => {
                let itemOption = '';

                for (let i = 1; i <= item.count; i++) {
                    itemOption += `<option value="${i}">${i}</option>`;
                }

                listItem += `
                    <li class="cart-item">
                        <div class="product">
                            <div class="product__image-container">
                                <img src="${item.img[0]}" alt="${item.name}" aria-describedby="aria_product_description_40366083" itemprop="image">
                            </div>
                            <div class="product__description">
                                <h3 class="product__name">
                                    <a href="card.html#${item.id}">${item.name}</a></h3>
                                <p class="product_description-text">${item.description}</p>
                            </div>
                            <div class="product__prices">
                                <div class="product__price-type product__price-type-regular">
                                    <div>
                                        <div class="product__total product__total-regular">${item.price}.-</div>
                                        <!--    <div class="product__price-regular">99.-</div>  -->
                                    </div>
                                </div>
                            </div>
                            <div class="product__controls">

                                <div class="product-controls__remove">
                                    <button type="button" class="btn btn-remove">
                                        <img src="image/remove-thin-24.16c1cc7a.svg" alt="Удалить товар">
                                    </button>
                                </div>
                                <div class="product-controls__quantity">
                                    <select title="Выберите количество" aria-label="Выберите количество">
                                        ${itemOption}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>
                `;

                totalPreice += +item.price;
            });

            cartListItems.insertAdjacentHTML('afterbegin', listItem);
            cartTotalPrice.textContent = `${totalPreice}.-`;
        }
    };

    if (location.pathname.includes('cart')) {
        getData.cart(userData.cartList, createCard);
    }
};

export default generateCart;