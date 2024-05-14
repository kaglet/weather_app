import createToggle from "../settings/celsius_farenheit/celsius_farenheit";
import listenForUserInput from "./user_input_listeners";

function createInputForm() {
  let form = document.createElement("form");
  let locationLabel = document.createElement("label");
  let locationInput = document.createElement("input");
  let wrapper = document.createElement("div");
  let searchButton = document.createElement("button");
  let searchIcon = document.createElement("i");
  let locationInputWrapper = document.createElement("div");
  let tempToggle = createToggle();

  let locationInputID = "location-input";

  locationInputWrapper.classList.add("location", "input", "wrapper");

  locationInput.setAttribute("id", locationInputID);
  locationLabel.setAttribute("for", locationInputID);

  locationLabel.textContent = "Enter Location: ";
  locationInput.setAttribute("type", "search");

  searchButton.textContent = "Search";
  searchButton.append(searchIcon);
  searchButton.setAttribute("type", "submit");
  searchIcon.classList.add("search");

  locationInputWrapper.append(locationInput);

  wrapper.append(locationLabel, locationInputWrapper, searchButton, tempToggle);
  form.append(wrapper);

  listenForUserInput(searchButton, locationInput, form);

  return form;
}

export default createInputForm;
