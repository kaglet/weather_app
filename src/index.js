// Template code is for testing and example import purposes

import "./styles.css";
import exampleImage from "Images/ahtziri-lagarde-4_FsMDmCc6A-unsplash.jpg";
import { createInputForm } from "./input_form/input_form";

function component() {
  const element = document.createElement("div");

  element.classList.add("test");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = exampleImage;

  element.append("Hi", myIcon);

  return element;
}

createInputForm(document.querySelector("body"));

document.body.appendChild(component());
