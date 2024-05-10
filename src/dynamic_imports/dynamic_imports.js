const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../assets/images/weather_icons", true, /\.png$/));
// At build-time cache will be populated with all required modules.

const images = Object.entries(cache).map((module) => {
  const imageURL = module[1];
  const name = module[0].replace("./", "");
  // Strings are predictable in structure and easy to handle so we can replace without even needing positions of delimiters
  const number = +module[0]
    .replace("./day/", "")
    .replace("./night/", "")
    .replace(".png", "");
  return { imageURL, name, number };
});

const dayImages = images.filter((image) => image.name.slice(0, 3) === "day");
const nightImages = images.filter(
  (image) => image.name.slice(0, 5) === "night"
);

export { dayImages, nightImages };
