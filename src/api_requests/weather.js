// API Key:
const API_KEY = "bae835189d75464b96f82826241704";

const weatherDataRequester = (() => {
  // Fetch from weather api using their error codes to inform request rejections not explicitly detected as errors
  async function tryFetch(requestString) {
    let response = await fetch(requestString, { mode: "cors" });
    // Custom handle errors by generating a promise reject during our specifications not implicit API specifications
    if (response.status !== 200) {
      // TODO: Handle errors in a more specific custom way rather than just receiving the error
      return Promise.reject(response);
    } else {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  }
  // TODO: Fetch current weather as well as average conditions for today's weather report
  // Put them together into an object to report today's weather from processing and parsing what you need from both of them
  // TODO: The processors must use the innate methods
  function fetchFutureWeatherByLocation(location) {
    return tryFetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7`
    );
  }

  function getCitiesStartingWith(citySearchString) {
    return tryFetch(
      `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${citySearchString}`
    );
  }

  return {
    fetchFutureWeatherByLocation,
    getCitiesStartingWith,
  };
})();

export default weatherDataRequester;
