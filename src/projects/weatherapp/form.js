import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.loadWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button style={{ width: "150px" }}>Get Weather</button>
      </form>
    );
  }
}

export default Form;
