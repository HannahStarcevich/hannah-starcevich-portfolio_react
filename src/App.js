import React from "react";
import "./App.css";
import Home from "./pages/Home";
import MyImpact from "./pages/MyImpact";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  document.title = "Portfolio Hannah Starcevich";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/myimpact" component={MyImpact} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
