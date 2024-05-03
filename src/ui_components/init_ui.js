import createHeader from "./header/header";
import createMainSection from "./main_section/main_section";

// Bundle all UI components creation in a closed namespace
function createUI() {
  let body = document.querySelector("body");

  let header = createHeader();
  let mainSection = createMainSection();

  body.append(header, mainSection);

  return body;
}

export default createUI;
