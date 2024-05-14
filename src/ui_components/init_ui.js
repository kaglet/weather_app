import createFooter from "./footer/footer";
import createHeader from "./header/header";
import createMainSection from "./main_section/main_section";

// Bundle all UI components creation in a closed namespace
function createUI() {
  let body = document.querySelector("body");

  let header = createHeader();
  let mainSection = createMainSection();
  let footer = createFooter();

  body.append(header, mainSection, footer);

  return body;
}

export default createUI;
