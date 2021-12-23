import React from "react";
import { Nav } from "./components/Nav/Nav";
import './styles/app.scss';
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Contacts } from "./components/Contacts/Contacts";
import { AboutUs } from "./components/AboutUs/AboutUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app_wrapper">
    <Router>
      <Nav/>
      <Switch>
          <Route exact path="react_Gruzz/">
            <Home />
          </Route>
          <Route path="react_Gruzz/contacts">
            <Contacts />
          </Route>
          <Route path="react_Gruzz/aboutUs">
            <AboutUs />
          </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
