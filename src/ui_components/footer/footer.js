import createExtraCredits from "../credits/extra_credits";

function createFooter() {
  let footer = document.createElement("footer");
  let credits = createExtraCredits();

  footer.append(credits);

  return footer;
}

export default createFooter;
