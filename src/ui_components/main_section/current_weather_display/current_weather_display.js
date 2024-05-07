function createCurrWeatherCard() {
  let currWeatherCard = document.createElement("section");

  currWeatherCard.classList.add("current", "weather", "card");

  return currWeatherCard;
}

export default createCurrWeatherCard;
