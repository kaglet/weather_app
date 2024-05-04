// Pass in an array length of objects and based off it construct display so it is not static but very reusable
// Single component is constructed then an array of them of an arbitrary number as a method

function createFutureForecastDisplay() {
  let display = document.createElement("section");
  display.classList.add("future", "weather", "card");

  return display;
}

export default createFutureForecastDisplay;
