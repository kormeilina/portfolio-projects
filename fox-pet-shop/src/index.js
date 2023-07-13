import { fetchItems } from "./fetch.js";
import { renderShopItems, renderCard } from "./render.js";
import { addToCard, loadCartFromLocalStorage } from "./cart.js";

let items = [];
let cart = loadCartFromLocalStorage();

document.addEventListener("DOMContentLoaded", function () {
  const searchItems = document.querySelector("#petshop-search");
  const petShop = document.querySelector(".petshop__store");
  const all = document.querySelector(".all");
  const forest = document.querySelector(".forest");
  const foxKids = document.querySelector(".fox-kids");
  const other = document.querySelector(".other");
  const sidebarBagToggle = document.querySelector(".sidebarBag-toggle");
  const shopingCard = document.querySelector(".sidebarBag");
  const overlay = document.getElementById("overlay");

  const header = document.querySelector(".header");
  const headerImg = document.querySelector(".header__img");
  const menuIcon = document.querySelector(".menu-icon");
  const headerNav = document.querySelector(".header__nav");
  const headerShopingCard = document.querySelector(".header__shopingCard");
  const headerAllItems = document.querySelector(".header__allItems");
  const logo = document.querySelector(".header__logo");
  const petshopSlider = document.querySelector("#petshop-slider");
  const sliderValueSpan = document.querySelector("#petshop-slider-out");

  const checkResolution = function () {
    if (window.innerWidth <= 768) {
      headerShopingCard.src = "../pic/our_history/shopping-cart-white.svg";
      headerAllItems.src = "../pic/our_history/fox_in_historyPage-white.svg";
      logo.src = "../pic/our_history/logo_white.svg";
    } else {
      headerShopingCard.src = "../pic/our_history/shopping-cart.svg";
      headerAllItems.src = "../pic/our_history/fox_in_historyPage.svg";
      logo.src = "../pic/our_history/logo_dark.svg";
    }
  };
  window.addEventListener("load", checkResolution);
  window.addEventListener("resize", checkResolution);

  fetchItems()
    .then((data) => {
      items = data;
      renderShopItems(data, cart);
    })
    .catch((error) => console.log(`Ошибка:`, error));

 

  if (!searchItems) return;
  searchItems.addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    renderShopItems(filteredItems);
  });

  const filterItemsByTopic = function (topic) {
    if (topic === "all") {
      return items;
    } else {
      return items.filter((item) => item.topic.toLowerCase() === topic);
    }
  };

  if (!all) return;
  all.addEventListener("click", function (e) {
    e.preventDefault();
    renderShopItems(filterItemsByTopic("all"), cart);
  });
  if (!forest) return;
  forest.addEventListener("click", function (e) {
    e.preventDefault();
    renderShopItems(filterItemsByTopic("forest"), cart);
  });

  if (!foxKids) return;
  foxKids.addEventListener("click", function (e) {
    e.preventDefault();
    renderShopItems(filterItemsByTopic("fox kids"), cart);
  });

  if (!other) return;
  other.addEventListener("click", function (e) {
    e.preventDefault();
    renderShopItems(filterItemsByTopic("other"), cart);
  });

  sidebarBagToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sidebarBag").classList.toggle("open");
    overlay.classList.add("blurred");
    shopingCard.style.display = "block";
    renderCard(cart);
  });

  const toggleMenu = function () {
    if (window.innerWidth <= 768) {
      headerNav.classList.toggle("show");
      if (headerNav.classList.contains("show")) {
        menuIcon.classList.add("close");
        headerImg.style.display = "none";
        headerNav.style.background =
          "url('../pic/main/cross.png') no-repeat bottom";
        header.style.minHeight = "300px";
        header.style.flexDirection = "column";
        menuIcon.style.display = "none";
      } else {
        menuIcon.classList.remove("close");
        menuIcon.style.display = "none";
        headerImg.style.display = "flex";
        headerNav.style.background = "none";
        header.style.flexDirection = "row";
        header.style.minHeight = "46px";
        menuIcon.style.display = "flex";
      }
    }
  };

  petshopSlider.addEventListener("input", function (e) {
    const selectedPrice = parseInt(e.target.value);
    sliderValueSpan.textContent = `$${selectedPrice}`;
    const filteredItems = items.filter((item) => item.price <= selectedPrice);
    renderShopItems(filteredItems);
  });
  petshopSlider.value = 300;
  sliderValueSpan.textContent = "$300";

  header.addEventListener("click", toggleMenu);

  cart = loadCartFromLocalStorage();
  renderCard(cart);
});
