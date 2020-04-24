import React, { Component } from 'react';
import DefaultReactPage from './DefaultReactPage';
import NavBar from './component/NavBar';
import LoginScreen from './LoginScreen';
import ListLndryJobsComponent from './component/ListLndryJobsComponent';
import LndryJobDetailsComponent from './component/LndryJobDetailsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterWasherOrWashee from './component/RegisterWasherOrWashee';
import RegisterWasher from './component/RegisterWasher';
import {SessionContext, getSessionCookie} from "./Session";


/**React Component representing the high-level structure of the application. 
 * Routing is defined in this file.**/

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      mainContent: <LoginScreen handleLogin={this.handleLogin} />
    }

  }

  handleLogin() {
    const mainContent = <DefaultReactPage />;
    this.setState({ mainContent: mainContent });
  }

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
              {/* {this.state.mainContent} */}

              <Switch>
                <Route exact path="/register" component={RegisterWasherOrWashee} />
                <Route exact path="/register/washer" component={RegisterWasher} />

                <Route path="/" exact component={ListLndryJobsComponent} />
                <Route path="/:id" component={LndryJobDetailsComponent} />

              </Switch>
            </>
          </Router>
        </SessionContext.Provider>
      </div>
    );
  }
}

export default App;