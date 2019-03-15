import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ApartmentDetails from "./components/layout/ApartmentDetails";
import CreateHomeAd from "./components/projects/CreateHomeAd";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
//components
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/apartments/:id" component={ApartmentDetails} />
            <Route exact path="/create" component={CreateHomeAd} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
