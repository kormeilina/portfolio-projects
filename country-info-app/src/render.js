const main = document.querySelector(".main");
const selectCountryInfo = document.querySelector(".selection__input");

export async function renderCountryInfoData(countryData) {
  selectCountryInfo.value = "";
  countryData.forEach((country) => {
    const { flag, name, population, region, capital } = country;
    const countryBlock = document.createElement("div");
    countryBlock.classList.add("main__block");

    countryBlock.innerHTML = `<img class='main__img' src='${flag}' alt='flag of ${name}'>
      <div class='main__block-text'>
          <h2 class='main__block-name'>${name}</h2>
          <p class='main__block-population'>Population: ${population}</p>
          <p class='main__block-region'>Region: ${region}</p>
          <p class='main__block-capital'>Capital: ${capital}</p>
          </div>
          `;
    main.appendChild(countryBlock);
  });
}
