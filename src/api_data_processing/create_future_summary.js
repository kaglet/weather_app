import weatherSummary from "./create_summary_object";

// Class with getter/setter methods for ease of access of properties - a factory function could have been used with prototypal inheritance
class futureDayWeatherSummary extends weatherSummary {
  #date;
  constructor(text, code, mintemp_c, mintemp_f, maxtemp_c, maxtemp_f, date) {
    super(text, code, mintemp_c, mintemp_f, maxtemp_c, maxtemp_f);
    this.#date = date;
  }

  get date() {
    return this.#date;
  }
}

export default futureDayWeatherSummary;
