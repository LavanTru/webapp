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
import ContactCard from './component/ContactCard';
import WasherProfile from './component/WasherProfile';


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

    return (
      <div className="App">
        <SessionContext.Provider value={session}>
          <Router>
            <>
              <NavBar />

              <Switch>
                <Route exact path="/register" component={RegisterWasherOrWashee} />
                <Route exact path="/register/washer" component={RegisterWasher} />
                <Route exact path="/profile" component={WasherProfile} />

                <Route path="/jobs" exact component={ListJobsComponent} />
                <Route path="/jobs/:id" component={JobDetailsComponent} />
                <Route path="/washerjobs" exact component={WasherJobCapabilitiesComponent} />

              </Switch>
            </>
          </Router>
        </SessionContext.Provider>

      </div>
    );
  }
}

export default App;