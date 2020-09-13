import React, { Component } from "react";
import Titles from "./titles";
import Form from "./form";
import Weather from "./weather";

const API_KEY = "5c9bb1f900406da84cef29b1178800f5";

class WeatherApp extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const response = await api_call.json();
    console.log(response);

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        error: "Please enter the values...",
      });
    }
  };

  render() {
    return (
      <div className="WeatherApp">
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default WeatherApp;
