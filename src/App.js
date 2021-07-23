import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import Timetable from "./components/Timetable";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" exact>
          <Navigation />
          <Timetable />
          <MobileNavigation />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
