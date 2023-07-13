## Fox Pet Shop
  
This project is a web application for a fox-themed pet shop, allowing users to browse and add items to their cart, search through items, filter items by different categories, adjust item quantities in the cart, and calculate total purchase amount.
   
## Features
Fetch Items: This project can fetch JSON data which represents items for sale in the shop.
Render Items: It can render these items on the page, including all relevant item details.
Search: There is a search bar that allows users to search items by their names.
Filter Items: It offers buttons to filter items by categories. The categories include 'All', 'Forest', 'Fox Kids', and 'Other'.
Add to Cart: Users can add items to their cart.
Adjust Quantity: Within the cart, users can increase or decrease the quantity of items.
Calculate Total: The application calculates the total cost of items in the cart.
Remove Items: Users can remove items from their cart.
Responsive Design: This project supports responsive design. Certain elements and styles adapt to the screen size of the device.
Save and Load Cart: The cart's state is saved to local storage, so it can be reloaded when users revisit the site.
  
##  File Structure
fetch.js: Contains the fetchItems() function to fetch JSON data.
cart.js: Contains various functions like addToCard(), addjustQuantity(), saveCartToLocalStorage(), loadCartFromLocalStorage(), calculateTotal(), and removeItem().
render.js: Contains the renderShopItems() and renderCard() functions, responsible for generating HTML for items and cart, and inserting them into the page.