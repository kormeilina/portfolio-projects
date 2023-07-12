import { getHourlyWeatherData, getWeatherData } from "./http.js";
import { renderCurrentWeatherData, renderHourlyWeatherData } from "./render.js";

document.addEventListener("DOMContentLoaded", function () {
  const locationInfo = document.querySelector("#main__info");
  const currentLocationTemp = document.querySelector("#main__input-temp");
  const currentLocationWeather = document.querySelector("#main__input-weather");
  const currentLocationDesc = document.querySelector("#main__input-location");
  const currentLocationWeatherState = document.querySelector(
    "#main__input-weather-state"
  );
  const mainImg = document.querySelector("#main__img");
  const locationInput = document.querySelector("#main__input");
  const btn = document.querySelector("#main__input-btn");

  async function launchOnClick() {
    const locationName = locationInput.value;
    try {
      const weatherData = await getWeatherData(locationName);
      renderCurrentWeatherData(
        weatherData,
        currentLocationWeatherState,
        locationInfo,
        currentLocationTemp,
        currentLocationWeather,
        currentLocationDesc,
        mainImg
      );
    } catch (e) {
      console.log(e);
    }
  }

  const getHourlyState = async () => {
    const locationName = locationInput.value;
    try {
      const hourlyWeatherData = await getHourlyWeatherData(locationName);
      renderHourlyWeatherData(hourlyWeatherData);
    } catch (e) {
      console.log(e);
    }
  };

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    launchOnClick();
    getHourlyState();
    document.querySelector(".main__input-block").style.display = "flex";
    document.querySelector(".main__weekly-wrapper").style.display = "flex";
  });
});
