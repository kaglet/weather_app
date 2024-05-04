let displayController = (function () {
  const displayWeatherDetails = (weather) => {
    console.log(weather);
  };

  const displayFutureWeather = (futureForecast) => {
    console.log(futureForecast);
  };

  const displayLocations = (locations) => {
    console.log(locations);
  };

  return { displayWeatherDetails, displayFutureWeather, displayLocations };
})();

export default displayController;
