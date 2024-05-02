// Gives only relevant data back to program
let dataProcessor = (function dataProcessor() {
  // Extract required weather data on object
  const processLocationObject = (object) => {
    let currentConditions = object.current;
    let location = object.location;

    let summary = {
      text: currentConditions.condition.text,
      icon: currentConditions.condition.icon,
      temp_c: currentConditions.feelslike_c,
      temp_f: currentConditions.feelslike_f,
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

    return { summary, extras, simplifiedLocation };
  };

  // Extract required data from array of locations
  const processLocationArray = (arr) => {
    let arrOfNames = arr.map(
      (location) => `${location.name}, ${location.region}, ${location.country}`
    );
    return arrOfNames;
  };

  return { processLocationArray, processLocationObject };
})();

export default dataProcessor;
