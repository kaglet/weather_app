// API Key:
const API_KEY = "bae835189d75464b96f8282624170";

const tryFetch = async function tryFetch(requestString) {
  let response = await fetch(requestString, { mode: "cors" });
  // Custom handle errors by generating a promise reject during our specifications not implicit specifications
  if (response.status !== 200) {
    return Promise.reject(response);
  } else {
    let jsonResponse = await response.json();

    return jsonResponse;
  }
};

// TODO: Check if nested async here is needed
const fetchWeatherByLocation = function fetchWeatherByLocation(location) {
  return tryFetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
  );
};

const getCitiesStartingWith = function getCitiesStartingWith(citySearchString) {
  return tryFetch(
    `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${citySearchString}`
  );
};

export { fetchWeatherByLocation, getCitiesStartingWith };
