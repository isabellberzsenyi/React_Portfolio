import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import Navigation from "./components/navigation";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Footer from "./components/footer";
import Now from "./components/now";
import ImpossibleList from "./components/impossiblelist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <BrowserRouter>
          <div className="Site-content">
            <Switch>
              <Route path="/" component={About} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/resume" component={Resume} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/now" component={Now} exact />
              <Route path="/impossiblelist" component={ImpossibleList} exact />
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
