import { kelvinToCelsius } from "./utils.js";

export function setImage(weather, imgElement) {
  let image = "";
  let additionalClass = "";
  switch (weather) {
    case "Clouds":
      image = "./pics/clouds.svg";
      break;
    case "Fog":
      image = "./pics/fog.svg";
      break;
    case "Cloudly":
      image = "./pics/cloudly.svg";
      break;
    case "Light Rain":
      image = "./pics/light_rain.svg";
      break;
    case "Strong Snow":
      image = "./pics/strong_snow.svg";
      break;
    case "Rain":
      image = "./pics/rain.svg";
      break;
    case "Sunny":
    case "Clear":
      image = "./pics/sunny.svg";
      additionalClass = "sunny";
      break;
    default:
      image = "./pics/default.svg";
      break;
  }
  imgElement.src = image;
  if (additionalClass) imgElement.classList.add(additionalClass);
}

export function renderCurrentWeatherData(
  weatherData,
  currentLocationWeatherState,
  locationInfo,
  currentLocationTemp,
  currentLocationWeather,
  currentLocationDesc,
  mainImg
) {
  const cityName = weatherData.name;
  const country = weatherData.sys.country;
  const temperature = weatherData.main.temp;
  const temperatureFeelsLike = weatherData.main.feels_like;
  const temperatureCelsius = kelvinToCelsius(temperature);
  const temperatureFeelsLikeCelsius = kelvinToCelsius(temperatureFeelsLike);
  const weather = weatherData.weather[0].main;
  currentLocationWeatherState.textContent = `${weather}, ${temperatureFeelsLikeCelsius}°C`;
  const weatherDescription = weatherData.weather[0].description;
  locationInfo.textContent = `Selected: ${cityName}, ${country}`;
  currentLocationTemp.textContent = `${temperatureCelsius}°C`;
  currentLocationWeather.textContent = weatherDescription;
  currentLocationDesc.textContent = `${cityName}, ${country}`;
  setImage(weatherData.weather[0].main, mainImg);
}

export function renderHourlyWeatherData(hourlyWeatherData) {
  const hourlyWeather = hourlyWeatherData.list;
  const dailyWeatherByDay = Array(7).fill({});
  hourlyWeather.forEach((weather) => {
    const dateTime = new Date(weather.dt_txt);
    const dayIndex = dateTime.getDay();
    const temperatureCelsius = kelvinToCelsius(weather.main.temp);
    const weatherDescription = weather.weather[0].main;
    if (!dailyWeatherByDay[dayIndex].times) {
      dailyWeatherByDay[dayIndex].times = [];
    }
    if (
      !dailyWeatherByDay[dayIndex].minTemp ||
      temperatureCelsius < dailyWeatherByDay[dayIndex].minTemp
    ) {
      dailyWeatherByDay[dayIndex].minTemp = temperatureCelsius;
      dailyWeatherByDay[dayIndex].minWeather = weatherDescription;
    }
    if (
      !dailyWeatherByDay[dayIndex].maxTemp ||
      temperatureCelsius > dailyWeatherByDay[dayIndex].maxTemp
    ) {
      dailyWeatherByDay[dayIndex].maxTemp = temperatureCelsius;
      dailyWeatherByDay[dayIndex].maxWeather = weatherDescription;
    }
    dailyWeatherByDay[dayIndex].times.push({
      temperature: temperatureCelsius,
      weather: weatherDescription,
    });
    const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    dailyWeatherByDay.forEach((dayWeather, index) => {
      const dayElement = document.querySelector(`#day${index}`);
      const dayTempElement = document.querySelector(`#dayWeather${index}`);
      const nightTempElement = document.querySelector(`#nightWeather${index}`);
      const imgElement = document.querySelector(`#img${index}`);
      const dayDisc = document.querySelector(`#main__weekly-disc${index}`);
      dayDisc.textContent = dayWeather.maxWeather;
      dayElement.textContent = weekdays[index];
      if (dayWeather.maxTemp !== undefined) {
        dayTempElement.textContent = `${dayWeather.maxTemp}°C`;
      } else {
        dayTempElement.textContent = `Not available`;
        dayDisc.textContent = `Not available`;
      }

      if (dayWeather.minTemp !== undefined) {
        nightTempElement.textContent = `${dayWeather.minTemp}°C`;
      } else {
        nightTempElement.textContent = `Not available`;
        dayDisc.textContent = `Not available`;
      }
      setImage(dayWeather.maxWeather, imgElement);
    });
  });
}
