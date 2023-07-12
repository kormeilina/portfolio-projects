## Country Info App
This is an application that uses the API https://restcountries.com/v2 to display information about different countries either by name or by region. Users can either input the country name into an input field or select a region from a dropdown menu.
  

## Features
Display countries information by name or by region.
Switch theme functionality.
## Code Organization
The code is split into different modules for better organization and readability:
  

index.js: This is the main entry file that ties everything together. It contains event listeners for form submission and region selection. Also, it includes the functionality to switch themes.
  

request.js: This module contains functions that make requests to the restcountries API. It exports two functions: getCountryName() and getCountriesByRegion(), which fetch information about a specific country or all countries in a specific region respectively.
  

render.js: This module is responsible for rendering the fetched country information on the page. It exports the renderCountryInfoData() function that takes an array of country data and displays it on the page.
  
http.js: This module contains a generic request() function that makes HTTP requests to a specified endpoint.
  

config.js: This module exports an object that contains configuration information like the base API URL.