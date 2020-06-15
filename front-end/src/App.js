import React, { Component } from 'react';
import NavBar from './component/NavBar/NavBar';
import ListJobsComponent from './component/ListJobsComponent';
import JobDetailsComponent from './component/JobDetailsComponent';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WasherJobCapabilitiesComponent from './component/WasherJobCapabilitiesComponent';
import RegisterWasherOrWashee from './component/Register/RegisterWasherOrWashee';
import RegisterWasherDetails from './component/Register/RegisterWasherDetails';
import RegisterWasheeDetails from './component/Register/RegisterWasheeDetails';
import { SessionContext, getSessionCookie } from "./Session";
import OrderComponent from './component/Order/OrderSetUp/OrderComponent';
import OrderConfirmation from './component/Order/OrderSetUp/OrderConfirmation';
import WasherProfile from './component/Profile/WasherProfile'
import WasherOrderList from "./component/Order/WasherOrder/WasherOrderList";
import WasherOrderConfirm from "./component/Order/WasherOrder/WasherOrderConfirm";
import LandingPage from './component/LandingPage/LandingPage';
import WasherSelectionContainer from './component/WasherSelection/WasherSelectionContainer';
import WasherSchedule from "./component/WasherSchedule";
import OrderScheduleAndDelivery from "./component/Order/OrderSetUp/ScheduleAndDelivery/OrderScheduleAndDelivery";
import Dashboard from "./component/Dashboard/Dashboard"
import FavoritesList from './component/FavoritesList';
import Footer from './component/Footer.jsx/Footer';

/**React Component representing the high-level structure of the application.
 * Routing is defined in this file.**/

class App extends Component {

  render() {
    const session = getSessionCookie();

    // display landing page if session is undefined and URL is in root path
    function renderLandingPageIfSessionIsUndefined() {
      if (!session && (window.location.href === "http://localhost:3000/")) {
        return <LandingPage />;
      }
    };

    return (
      <>
      <div className="App">
        <SessionContext.Provider value={session}>
          <Router>
            <>
              <NavBar />
              {renderLandingPageIfSessionIsUndefined()}
              <Switch>
                <Route exact path="/register" component={RegisterWasherOrWashee} />
                <Route exact path="/register/washer" component={RegisterWasherDetails} />
                <Route exact path="/register/washee" component={RegisterWasheeDetails} />
                <Route path="/profile/:id" component={WasherProfile} />
                <Route exact path="/jobs" component={ListJobsComponent} />
                <Route path="/jobs/:id" component={JobDetailsComponent} />
                <Route exact path="/washerjobs" component={WasherJobCapabilitiesComponent} />
                <Route exact path="/order" component={OrderComponent} />
                <Route exact path="/orderConfirmation" component={OrderConfirmation} />
                <Route exact path="/washerOrderList" component={WasherOrderList} />
                <Route path="/washerOrder/:id" component={WasherOrderConfirm} />
                <Route exact path="/washers" component={WasherSelectionContainer} />
                <Route exact path="/washerSchedule" component={WasherSchedule} />
                <Route exact path="/orderSchedule" component={OrderScheduleAndDelivery} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/favorites" component={FavoritesList} />
              </Switch>
            </>
          </Router>
        </SessionContext.Provider>

      </div>
      <Footer />
      </>
    );
  }
}

export default App;