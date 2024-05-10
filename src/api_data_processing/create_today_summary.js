import weatherSummary from "./create_summary_object";

class todayWeatherSummary extends weatherSummary {
  #temp_c;
  #temp_f;

  constructor(
    text,
    code,
    temp_c,
    temp_f,
    mintemp_c,
    mintemp_f,
    maxtemp_c,
    maxtemp_f
  ) {
    super(text, code, mintemp_c, mintemp_f, maxtemp_c, maxtemp_f);
    this.#temp_c = temp_c;
    this.#temp_f = temp_f;
  }

  get temp_c() {
    return this.#temp_c;
  }

  get temp_f() {
    return this.#temp_f;
  }
}

export default todayWeatherSummary;
