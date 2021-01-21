import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectPage from "./pages/portpage";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/work" component={ProjectPage} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}

export default App;
