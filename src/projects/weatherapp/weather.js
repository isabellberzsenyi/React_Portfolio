import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather_info">
        {this.props.country && this.props.city && (
          <p className="weather_key">
            Location:{" "}
            <span className="weather_value">
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather_key">
            Temperature: <span className="weather_value">{this.props.temperature}</span> deg F
          </p>
        )}
        {this.props.humidity && (
          <p className="weather_key">
            Humidity: <span className="weather_value">{this.props.humidity}</span> %
          </p>
        )}
        {this.props.description && (
          <p className="weather_key">
            Conditions: <span className="weather_value">{this.props.description}</span>
          </p>
        )}
        {this.props.error && <p className="weather_error">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
