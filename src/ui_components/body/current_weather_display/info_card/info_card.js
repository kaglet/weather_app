function createInfoCard(info) {
  let card = document.createElement("span");
  card.classList.add("info", "card");
  card.textContent = info;

  return card;
}

export default createInfoCard;
