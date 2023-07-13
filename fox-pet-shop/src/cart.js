import { renderCard } from "./render.js";

export function addToCard(item, cart) {
  const itemData = {
    name: item.name,
    price: item.price,
    image: item.image,
    quantity: 1,
  };
  const existingItem = cart.find((cartItem) => cartItem.name === itemData.name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(itemData);
  }
  saveCartToLocalStorage(cart);
  renderCard(cart);
}

export function addjustQuantity(operation, index, cart) {
  const item = cart[index];
  if (operation === "increase") {
    item.quantity++;
  } else if (operation === "decrease" && item.quantity > 1) {
    item.quantity--;
  }
  saveCartToLocalStorage(cart);
  renderCard(cart);
}

export function saveCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
}
export function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
export function removeItem(index, cart) {
  cart.splice(index, 1);
  saveCartToLocalStorage(cart);
  renderCard(cart);
}
