function createSelfCredits() {
  let selfCredits = document.createElement("div");
  let githubIcon = document.createElement("i");
  let linkedInIcon = document.createElement("i");
  let githubAnchor = document.createElement("a");
  let linkedInAnchor = document.createElement("a");

  githubIcon.classList.add("fa-brands", "fa-github");
  linkedInIcon.classList.add("fa-brands", "fa-linkedin");

  selfCredits.classList.add("self", "credits");

  githubAnchor.href = "https://github.com/kaglet";
  linkedInAnchor.href =
    "https://www.linkedin.com/in/kago-motlhabane-3729b72a1/";

  githubAnchor.append(githubIcon);
  linkedInAnchor.append(linkedInIcon);

  selfCredits.append(githubAnchor, linkedInAnchor);

  return selfCredits;
}

export default createSelfCredits;
