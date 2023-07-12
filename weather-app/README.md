## Weather App
This is a weather application that utilizes the API https://api.openweathermap.org to fetch and display current weather data and hourly forecasts for a specific location. Users can enter the name of a city in an input field, and the application will return the current weather for that city, as well as a weekly forecast.
  

## Features
Display current weather information for a specified location.
Display hourly weather forecasts for the next seven days for a specified location.
  
## Code Organization
  
The code is organized into different modules:
  
index.js: This is the main file that coordinates all the operations of the application. It fetches weather data based on the city name entered by the user.
  
http.js: This file contains the functions that make HTTP requests to the OpenWeatherMap API. It exports two functions: getWeatherData() and getHourlyWeatherData(), which fetch current weather data and hourly forecast data respectively.
  
render.js: This file is responsible for rendering the weather data on the webpage. It exports two functions: renderCurrentWeatherData() and renderHourlyWeatherData(), which display current weather data and hourly forecast data respectively.
  
config.js: This file contains the API key and base URL for the OpenWeatherMap API.
  
utils.js: This file contains utility functions, such as a function to convert temperature from Kelvin to Celsius and a function to set an image based on the current weather condition.