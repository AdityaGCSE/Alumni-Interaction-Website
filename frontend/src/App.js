import React from "react";
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Pages/Home/Home.js';
import Events from './Components/Pages/Events/Events.js';
import Initiatives from './Components/Pages/Initiatives/Initiatives.js';
import Newsmedia from './Components/Pages/Newsmedia/Newsmedia.js';
import Aboutus from './Components/Pages/Aboutus/Aboutus.js';
import Services from './Components/Pages/Services/Services.js';
import Userinfo from "./Components/User/Userinfo.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


export default function Main() {
  
  return (
  <Router>
    <div>
       <Header/>
       <Switch>
          <Route exact path="/Alumni-Interaction-Website/#/">
            <Home />
          </Route>
          <Route exact path="/Alumni-Interaction-Website/#/events">
            <Events />
          </Route>
          <Route exact path="/Alumni-Interaction-Website/#/initiatives">
            <Initiatives/>
          </Route>
          <Route exact path="/Alumni-Interaction-Website/#/newsmedia">
            <Newsmedia />
          </Route>
          <Route exact path="/Alumni-Interaction-Website/#/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/Alumni-Interaction-Website/#/services">
            <Services />
          </Route>
          <Route exact path="/Alumni-Interaction-Website/#/user">
            <Userinfo />
          </Route>
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}
