function clearFutureWeatherCard() {
  let futureWeatherCard = document.querySelector(".future.weather.card");

  while (futureWeatherCard.firstChild) {
    futureWeatherCard.removeChild(futureWeatherCard.lastChild);
  }
}

export default clearFutureWeatherCard;
