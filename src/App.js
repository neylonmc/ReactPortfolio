import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import ProjectPage from "./utils/ProjectData/portfoliopage.js";

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
