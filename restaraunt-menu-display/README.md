## Restaurant Menu Display
  
This script provides a dynamic and filterable menu for a restaurant website. It displays all menu items, and allows users to filter items by categories such as breakfast, lunch, dinner, and shakes.

## Features
  
Dynamic Menu: Displays all items on the restaurant menu including title, image, price, and description.
Filterable Categories: Menu items can be filtered by their category. For example, users can choose to only view 'breakfast' items.
  
## Code Organization
The script is organized into a few key parts:
  
menu Array: This is where all the menu items are stored. Each item is an object with properties like 'id', 'title', 'category', 'price', 'img', and 'desc'.
displayMenuButtons() function: This function generates and displays buttons for each category in the menu, as well as an 'All' button.
displayMenuItems() function: This function generates HTML for the menu items and inserts it into the page. It uses the current category to filter the items.