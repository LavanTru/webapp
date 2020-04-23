import React, { Component } from 'react';
import DefaultReactPage from './DefaultReactPage';
import NavBar from './component/NavBar';
import LoginScreen from './LoginScreen';
import ListJobsComponent from './component/ListJobsComponent';
import JobDetailsComponent from './component/JobDetailsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WasherJobCapabilitiesComponent from './component/WasherJobCapabilitiesComponent';


/**React Component representing the high-level structure of the application. 
 * Routing is defined in this file.**/

class App extends Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state={
      mainContent:<LoginScreen handleLogin = {this.handleLogin} />
    }
    
  }

  handleLogin() {
   const mainContent = <DefaultReactPage/>;
    this.setState({mainContent:mainContent});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
              <NavBar/>
            {this.state.mainContent}
            
            <Switch>
              <Route path="/jobs" exact component={ListJobsComponent} />
              <Route path="/jobs/:id" component={JobDetailsComponent} />
              <Route path="/washerjobs" exact component={WasherJobCapabilitiesComponent} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;