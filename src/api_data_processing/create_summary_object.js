import iconRetriever from "../weather_conditions/icon_retriever";

class weatherSummary {
  #text;
  #code;
  #imageURL;
  #mintemp_c;
  #mintemp_f;
  #maxtemp_c;
  #maxtemp_f;

  constructor(text, code, mintemp_c, mintemp_f, maxtemp_c, maxtemp_f) {
    this.#text = text;
    this.#code = code;
    this.#imageURL = iconRetriever.getIcon(this.code);
    // TODO = Get data from futureWeather object
    this.#mintemp_c = mintemp_c;
    this.#mintemp_f = mintemp_f;
    this.#maxtemp_c = maxtemp_c;
    this.#maxtemp_f = maxtemp_f;
  }

  get text() {
    return this.#text;
  }

  get code() {
    return this.#code;
  }

  get mintemp_c() {
    return this.#mintemp_c;
  }

  get mintemp_f() {
    return this.#mintemp_f;
  }

  get maxtemp_c() {
    return this.#maxtemp_c;
  }

  get maxtemp_f() {
    return this.#maxtemp_f;
  }

  get imageURL() {
    return this.#imageURL;
  }
}

export default weatherSummary;
