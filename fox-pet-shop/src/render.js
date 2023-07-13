import {
  addToCard,
  saveCartToLocalStorage,
  addjustQuantity,
  calculateTotal,
  removeItem,
} from "./cart.js";

const petShop = document.querySelector(".petshop__store");
const shopingCard = document.querySelector(".sidebarBag");
const overlay = document.getElementById("overlay");

export function renderShopItems(itemsToRender, cart) {
  if (!petShop) return;
    petShop.innerHTML = "";
    itemsToRender.forEach((item) => {
      const { name, topic, price, image } = item;
      const itemBlock = document.createElement("div");
      itemBlock.classList.add("petshop__item");
      itemBlock.innerHTML = `<img src="${image}" alt="" class="petshop__item-img">
          <button class="petshop__item-btn" data-operation='add'>Add</button>
          <div class="petshop__item-wrapper">
          <h4 class="petshop__item-name text-black">${name}</h4>
          <span class="petshop__item-price text-black">${price}</span>
          <span class="petshop__item-rate">
            <span class="petshop__item-rate-star" data-value="1">&#9733;</span>
            <span class="petshop__item-rate-star" data-value="2">&#9733;</span>
            <span class="petshop__item-rate-star" data-value="3">&#9733;</span>
            <span class="petshop__item-rate-star" data-value="4">&#9733;</span>
            <span class="petshop__item-rate-star" data-value="5">&#9733;</span>
          </span>
          <p class="petshop__item-topic">${topic}</p>`;
      petShop.appendChild(itemBlock);

      const btn = itemBlock.querySelector("[data-operation='add']");
      btn.addEventListener("click", function (e) {
        addToCard(item, cart);
        renderCard(cart);
      });
})
}

export function renderCard(cart) {
  const cartContainer = document.querySelector(".sidebarBag__items");
  if (!cartContainer) return;
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
      cartContainer.innerHTML += `
        <div class='cart-item'>
          <div class='cart-item-wrapper'>
            <img class='cart-item-img' src='${item.image}'>
            <span class='cart-item-content'>
              <h4 class='cart-item-text'>${item.name}</h4>
              <p class='cart-item-price'>Price: ${item.price}</p>
            </span>
          </div>
          <div class='cart-item-wrapper'>
            <div class='cart-item-quantity-wrapper'>
              <button class='cart-item-quantity-btn decrease' data-operation='decrease' data-index="${index}">-</button>
              <p class='cart-item-quantity'>${item.quantity}</p>
              <button class='cart-item-quantity-btn increase'data-operation='increase' data-index="${index}">+</button>
            </div>
            <button class='cart-item-remove' data-index="${index}">Remove</button>
          </div>
        </div>`;
    });
    cartContainer.innerHTML += `<div class='cart-item-total'>
      <p class='cart-item-total-text'>Total: ${calculateTotal(cart)} </p>
      <button class='cart-item-total-btn'>Checkout</button>
    </div>`;
    saveCartToLocalStorage(cart);
    attachEventHandlers(cart);
  }

function attachEventHandlers(cart) {
  const quantityBtns = document.querySelectorAll(".cart-item-quantity-btn");
  const removeBtns = document.querySelectorAll(".cart-item-remove");

  quantityBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const operation = e.target.classList.contains("increase")
        ? "increase"
        : "decrease";
      const index = parseInt(e.target.dataset.index);
      addjustQuantity(operation, index, cart);
      renderCard(cart);
    });
  });

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const index = parseInt(e.target.dataset.index);
      removeItem(index, cart);
      renderCard(cart);
    });
  });
}

export function closeCart() {
  document.querySelector(".sidebarBag").classList.remove("open");
  overlay.classList.remove("blurred");
  shopingCard.style.display = "none";
}
