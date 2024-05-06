import createMiniInfoCard from "./info_card";

function createExtendedMiniInfoCard(fullDate) {
  // For extension, extend a base UI simple card. First create base and add/edit more properties
  // Note thought that no properties are "added" to a UI component, hence this style of pseudo-extension from a base component created for use is used
  let card = createMiniInfoCard();
  card.classList.add("extended");

  let fullDateDisplay = document.querySelector("p");
  fullDateDisplay.textContent = fullDate;

  let picInCard = card.querySelector("div.pic");
  card.insertBefore(fullDateDisplay, picInCard);

  return card;
}

export default createExtendedMiniInfoCard;
