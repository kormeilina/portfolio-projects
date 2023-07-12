document.addEventListener("DOMContentLoaded", function () {
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./img/buttermilk-pancakes.jpg",
      desc: `These Pancakes are light and fluffy with a soft crust and spongy
      texture. With butter and lots of syrup.`,
    },
    {
      id: 2,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./img/godzilla-milkshake.jpg",
      desc: `Crushed strawberry, vanilla ice cream, milk, and a pinch of
      cinnamon blend into a cool, refreshing shake.`,
    },
    {
      id: 3,
      title: "egg burger",
      category: "dinner",
      price: 22.99,
      img: "./img/egg-burger.jpg",
      desc: `A huge single or triple burger with all the fixings, cheese,
      lettuce, tomato, onions and special sauce or mayonnaise.`,
    },
    {
      id: 4,
      title: "bacon overflow",
      category: "lunch",
      price: 8.99,
      img: "./img/bacon-overflow.jpg",
      desc: `Bacon and Eggs is a popular and most loves Continental breakfast
      that is extremely fulfilling and delicious.`,
    },
    {
      id: 5,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./img/quarantine-buddy.jpg",
      desc: `A cold drink made of milk, a sweet flavouring such as fruit or
      chocolate, and typically ice cream.`,
    },
    {
      id: 6,
      title: "dinner double",
      category: "dinner",
      price: 13.99,
      img: "./img/dinner-double.jpg",
      desc: `A burger is a patty of ground beef grilled and placed between two
      halves of a bun. `,
    },
    {
      id: 7,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./img/country-delight.jpg",
      desc: `Inspired by British pub fare, this breakast-for-dinner dish tops buttered toast with bacony.`,
    },
    {
      id: 8,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./img/oreo-dream.jpg",
      desc: `Add Oreo cookies, whole milk, vanilla extract, and vanilla ice cream to a blender and blend.`,
    },
    {
      id: 9,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./img/american-classic.jpg",
      desc: `A hamburger comprised of bread, french fries, mayo, and ketchup. American classic dinner in US.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "lunch",
      price: 39.99,
      img: "./img/steak-dinner.jpg",
      desc: `Delicious barbecued steak and vegetables. Served with secret sauce. Classic of all time. Recommended.`,
    },
  ];

  const content = document.querySelector(".content");
  const btnContainer = document.querySelector(".btnContainer");
  let currentCategory = "all";

  function displayMenuButtons() {
    const buttons = `<button class='btns' data-category='all'>All</button>
  <button class='btns' data-category="breakfast">Breakfast</button>
  <button class='btns' data-category="lunch">Lunch</button>
  <button class='btns' data-category="shakes">Shakes</button>
  <button class='btns' data-category="dinner">Dinner</button>`;
    btnContainer.innerHTML = buttons;

    const categoryButtons = document.querySelectorAll(".btns");
    categoryButtons.forEach((button) => {
      button.addEventListener("click", function () {
        currentCategory = this.getAttribute("data-category");
        displayMenuItems()
      });
    });
  }

  function displayMenuItems() {
    let menuHTML = "";
    let filteredMenu;

    if (currentCategory === "all") {
      filteredMenu = menu;
    } else {
      filteredMenu = menu.filter((item) => item.category === currentCategory);
    }

    filteredMenu.forEach((item) => {
      menuHTML += `
      <div class='card'>
        <img src='${item.img}' class='food-img'>
        <h2 class='card-title'>${item.title} <span class='price'>$${item.price}</span></h2>
      <p class='item-info'>${item.desc}</p>
      </div>
    `;
    });

    content.innerHTML = menuHTML;
  }

  displayMenuButtons();
  displayMenuItems();
});
