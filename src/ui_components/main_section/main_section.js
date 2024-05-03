import { createInputForm } from "./input_form/input_form";

function createMainSection() {
  let mainSection = document.createElement("div");
  mainSection.append(createInputForm());

  return mainSection;
}

export default createMainSection;
