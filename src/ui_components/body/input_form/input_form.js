import dataProcessor from "../../../api_data_processing/data_processor";
import weatherDataRequester from "../../../api_requests/weather";

function listenForUserInput(searchButton, locationInput) {
  searchButton.addEventListener("click", () => {
    let location = locationInput.value;
    weatherDataRequester
      .fetchWeatherByLocation(location)
      .then((result) => {
        console.log(dataProcessor.processLocationObject(result));
      })
      .catch((error) => console.log(error));
  });

  locationInput.addEventListener("input", () => {
    let location = locationInput.value;
    weatherDataRequester
      .getCitiesStartingWith(location)
      .then((result) => {
        console.log(dataProcessor.processLocationArray(result));
      })
      .catch((error) => console.log(error));
  });
}

function createInputForm() {
  let form = document.createElement("form");
  let locationLabel = document.createElement("label");
  let locationInput = document.createElement("input");
  let wrapper = document.createElement("div");
  let searchButton = document.createElement("button");
  let searchIcon = document.createElement("i");

  let locationInputID = "location-input";

  locationInput.setAttribute("id", locationInputID);
  locationLabel.setAttribute("for", locationInputID);

  locationLabel.textContent = "Enter Location: ";
  locationInput.setAttribute("type", "search");

  searchButton.textContent = "Search";
  searchButton.append(searchIcon);
  searchButton.setAttribute("type", "button");
  searchIcon.classList.add("search");

  wrapper.append(locationLabel, locationInput, searchButton);
  form.append(wrapper);

  listenForUserInput(searchButton, locationInput);

  return form;
}

export { createInputForm };
