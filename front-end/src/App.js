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
import RegisterWasherOrWashee from './component/RegisterWasherOrWashee';
import RegisterWasher from './component/RegisterWasher';
import { SessionContext, getSessionCookie } from "./Session";
import OrderComponent from './component/OrderComponent';
import WasherProfile from './component/WasherProfile';
import WasherOrderList from "./component/WasherOrderList";
import WasherOrderConfirm from "./component/WasherOrderConfirm";
import WasherListComponent from './component/WasherListComponent';
import LandingPage from './component/LandingPage';

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

    function renderLandingPageIfSessionIsUndefined () {
        if (!session) {
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
                <Route exact path="/register/washer" component={RegisterWasher} />
                <Route exact path="/profile/:id" component={WasherProfile} />
                <Route exact path="/jobs" component={ListJobsComponent} />
                <Route path="/jobs/:id" component={JobDetailsComponent} />
                <Route exact path="/washerjobs" component={WasherJobCapabilitiesComponent} />
                <Route exact path="/order" component={OrderComponent} />
                <Route exact path="/washerOrderList" component={WasherOrderList} />
                <Route exact path="/washerOrder/:id" component={WasherOrderConfirm} />                <Route path="/washerlist" exact component={WasherListComponent} />
                <Route path="/washerlist" exact component={WasherListComponent} />
    </Switch>
            </>
          </Router>
        </SessionContext.Provider>

      </div>
    );
  }
}

export default App;