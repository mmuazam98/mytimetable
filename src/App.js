import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import Timetable from "./components/Timetable";
import Footer from "./components/Footer";
import ThemeModal from "./components/ThemeModal";
const App = () => {
  return (
    <Router>
      <ThemeModal />
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
