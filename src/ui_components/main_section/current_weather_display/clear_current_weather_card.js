function clearCurrentWeatherCard() {
  let currWeatherCard = document.querySelector(".current.weather.card");

  while (currWeatherCard.firstChild) {
    currWeatherCard.removeChild(currWeatherCard.lastChild);
  }
}

export default clearCurrentWeatherCard;
