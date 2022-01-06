const moment = require("moment");

class Weather {
  constructor(data) {
    this.data = data;
  }

  displayTemperature(temp) {
    return `Temperature: ${temp}`;
  }

  displayHumidity(humidity) {
    return `Humidity: ${humidity}%`;
  }

  displayWindSpeed(windSpeed) {
    return `Wind Speed: ${windSpeed} MPH`;
  }

  displayUvIndex(uvi) {
    return `UV Index: ${uvi}`;
  }

  displayCurrentInfo() {
    const currentInfo = `
      City: Leeds
      --------------------
      ${this.displayTemperature(this.data.main.temp)}
      ${this.displayHumidity(this.data.main.humidity)}
      ${this.displayWindSpeed(this.data.wind.speed)}
    `;
    console.log(currentInfo);
  }

  formatForecastDate(dateTime) {
    const date = moment.unix(dateTime).format("DD/MM/YYYY");
    return `Date: ${date}`;
  }

  displayForecastInfo() {
    const forecastInfo = `
      City: Leeds
      ${this.formatForecastDate(this.data.dt)}
      --------------------
      ${this.displayTemperature(this.data.temp.max)}
      ${this.displayHumidity(this.data.humidity)}
      ${this.displayWindSpeed(this.data.wind_speed)}
      ${this.displayUvIndex(this.data.uvi)}
    `;
    console.log(forecastInfo);
  }
}

module.exports = Weather;
