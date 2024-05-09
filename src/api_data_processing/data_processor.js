import iconRetriever from "../weather_conditions/icon_retriever.js";

// Gives only relevant data back to program
let dataProcessor = (function dataProcessor() {
  // Extract required weather data on object
  const processWeatherFeedback = (futureWeather) => {
    let currentConditions = futureWeather.current;
    let location = futureWeather.location;
    let imageURL = iconRetriever.getIcon(currentConditions.condition.code);

    let summary = {
      text: currentConditions.condition.text,
      code: currentConditions.condition.code,
      imageURL,
      temp_c: currentConditions.feelslike_c,
      temp_f: currentConditions.feelslike_f,
      // TODO: Get data from futureWeather object
      mintemp_c: futureWeather.forecast.forecastday[0].day.mintemp_c,
      mintemp_f: futureWeather.forecast.forecastday[0].day.mintemp_f,
      maxtemp_c: futureWeather.forecast.forecastday[0].day.maxtemp_c,
      maxtemp_f: futureWeather.forecast.forecastday[0].day.maxtemp_f,
    };

    let simplifiedLocation = {
      name: location.name,
      region: location.region,
      country: location.country,
    };

    let extras = {
      wind_kph: currentConditions.wind_kph,
      wind_mph: currentConditions.wind_mph,
      humidity: currentConditions.humidity,
    };

    let processedFutureWeather = futureWeather.forecast.forecastday;

    let processedTodayWeather = {
      summary,
      extras,
      simplifiedLocation,
    };

    return {
      processedTodayWeather,
      processedFutureWeather,
    };
  };

  // Extract required data from array of locations
  const processLocationArray = (arr) => {
    let arrOfNames = arr.map(
      (location) => `${location.name}, ${location.region}, ${location.country}`
    );
    return arrOfNames;
  };

  return { processLocationArray, processWeatherFeedback };
})();

export default dataProcessor;
