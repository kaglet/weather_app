import preferencesManager from "../preferences";
import { default as toggleFunc } from "./toggle.js";

function createToggle() {
  let toggle = document.createElement("div");
  toggle.classList.add("toggle", "temperature");
  toggle.textContent = `°${preferencesManager.getTemperaturePreference()}`;

  toggle.addEventListener("click", toggleFunc); // Use storage data differently in parameters that's all, with reload if needed, same display functions

  return toggle;
}

export default createToggle;
