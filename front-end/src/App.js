import React, { Component } from 'react';
import NavBar from './component/NavBar';
import ListJobsComponent from './component/ListJobsComponent';
import JobDetailsComponent from './component/JobDetailsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WasherJobCapabilitiesComponent from './component/WasherJobCapabilitiesComponent';
import RegisterWasherOrWashee from './component/Register/RegisterWasherOrWashee';
import RegisterWasherDetails from './component/Register/RegisterWasherDetails';
import RegisterWasheeDetails from './component/Register/RegisterWasheeDetails';
import { SessionContext, getSessionCookie } from "./Session";
import OrderComponent from './component/OrderComponent';
import WasherProfile from './component/WasherProfile';
import WasherOrderList from "./component/WasherOrderList";
import WasherOrderConfirm from "./component/WasherOrderConfirm";
import LandingPage from './component/LandingPage/LandingPage';
import WasherSelectionContainer from './component/WasherSelection/WasherSelectionContainer';
import WasherListContainer from './component/WasherSelection/WasherList/WasherListContainer';
import WasherSchedule from "./component/Schedule/WasherSchedule";
import OrderSchedule from "./component/Schedule/OrderSchedule";

/**React Component representing the high-level structure of the application.
 * Routing is defined in this file.**/

class App extends Component {

  render() {
    // Hooks to track changes to the session
    // const [session, setSession] = useState(getSessionCookie());
    // useEffect(
    //   () => {
    //     setSession(getSessionCookie());
    //   },
    //   [session]
    // );
    const session = getSessionCookie();

    // display landing page if session is undefined and URL is in root path
    function renderLandingPageIfSessionIsUndefined() {
      if (!session && (window.location.href === "http://localhost:3000/")) {
        return <LandingPage />;
      }
    };

    return (
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
                <Route exact path="/profile/:id" component={WasherProfile} />
                <Route exact path="/jobs" component={ListJobsComponent} />
                <Route path="/jobs/:id" component={JobDetailsComponent} />
                <Route exact path="/washerjobs" component={WasherJobCapabilitiesComponent} />
                <Route exact path="/order" component={OrderComponent} />
                <Route exact path="/washerOrderList" component={WasherOrderList} />
                <Route exact path="/washerOrder/:id" component={WasherOrderConfirm} />
                <Route exact path="/washerlist" component={WasherListContainer} />
                <Route exact path="/washers" component={WasherSelectionContainer} />
                <Route exact path="/washerSchedule" component={WasherSchedule} />
                <Route exact path="/orderSchedule" component={OrderSchedule} />
              </Switch>
            </>
          </Router>
        </SessionContext.Provider>

      </div>
    );
  }
}

export default App;