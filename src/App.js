import React from "react";
import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/myimpact" component={Myimpact} /> */}
        </Wrapper>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
