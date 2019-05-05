//required packages
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Logout from "./components/auth/Logout";
import MyAccount from "./components/auth/MyAccount";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ApartmentDetails from "./components/layout/ApartmentDetails";
import ApartmentsLists from "./components/layout/ApartmentsLists";
import TopDestinations from "./components/layout/TopDestinations";
import SearchResults from "./components/layout/search/SearchResults";
import Countries from "./components/pages/Countries";
import PostMyApartment from "./components/auth/PostMyApartment/PostMyApartment";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/apartments/:id" component={ApartmentDetails} />
            <Route exact path="/countries/:id" component={Countries} />
            <Route
              exact
              path="/search"
              render={props => <SearchResults {...props} />}
            />
            <Route
              exact
              path="/apartmentlistings"
              component={ApartmentsLists}
            />
            <Route exact path="/profile" component={MyAccount} />
            <Route exact path="/top-destinations" component={TopDestinations} />
            <Route exact path="/create" component={PostMyApartment} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/logout" component={Logout} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
