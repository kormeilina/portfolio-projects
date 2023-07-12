import { renderCountryInfoData } from "./render.js";
import { getCountryName, getCountriesByRegion } from "./request.js";
const dropdownRegion = document.querySelector(".selection__dropdown-btn");
const dropdownContent = document.querySelector(".selection__dropdown-content");
const selectCountryInfo = document.querySelector(".selection__input");
const main = document.querySelector(".main");
const form = document.querySelector("#country-form");
const switchOnClick = document.querySelector(".selection__switchOnClick");
const asia = document.querySelector(".asia");
const europe = document.querySelector(".europe");
const america = document.querySelector(".america");

async function launchOnClick(e) {
  e.preventDefault();
  const countryInfo = selectCountryInfo.value;
  try {
    const countryData = await getCountryName(countryInfo);
    renderCountryInfoData(countryData);
  } catch (e) {
    console.log(e);
  }
}

async function handleRegionClick(region) {
  main.innerHTML = "";
  try {
    const countriesData = await getCountriesByRegion(region);
    renderCountryInfoData(countriesData);
  } catch (e) {
    console.log(e);
  }
}

function toggleDropdownContent() {
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

function switchTheme() {
  document.body.classList.toggle("dark_theme");
}

form.addEventListener("submit", launchOnClick);
dropdownRegion.addEventListener("click", toggleDropdownContent);
asia.addEventListener("click", () => handleRegionClick("asia"));
europe.addEventListener("click", () => handleRegionClick("europe"));
america.addEventListener("click", () => handleRegionClick("americas"));
switchOnClick.addEventListener("click", switchTheme);
