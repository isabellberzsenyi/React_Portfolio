import React, { Component } from "react";
import Navigation from "./navigation";
import SpotifyPlayer from "react-spotify-player";

const size = {
  width: "100%",
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "black"; // or 'white'

class About extends Component {
  render() {
    return (
      <div>
        <SpotifyPlayer
          uri="spotify:playlist:3za15cKGtoR0aZOdqgORM7"
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}

export default About;
