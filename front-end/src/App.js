import React, { Component } from 'react';
import NavBar from './component/NavBar';
import ListLndryJobsComponent from './component/ListLndryJobsComponent';
import LndryJobDetailsComponent from './component/LndryJobDetailsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterWasherOrWashee from './component/RegisterWasherOrWashee';
import RegisterWasher from './component/RegisterWasher';
import { SessionContext, getSessionCookie } from "./Session";
import WasherLndryJobCapabilitiesComponent from './component/WasherLndryJobCapabilitiesComponent';


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
            <NavBar  />

              <Switch>
                <Route exact path="/register" component={RegisterWasherOrWashee} />
                <Route exact path="/register/washer" component={RegisterWasher} />

                <Route path="/jobs" exact component={ListLndryJobsComponent} />
                <Route path="/jobs/:id" component={LndryJobDetailsComponent} />
                <Route path="/washerjobs" exact component={WasherLndryJobCapabilitiesComponent} />

              </Switch>
            </>
          </Router>
        </SessionContext.Provider>
      </div>
    );
  }
}

export default App;