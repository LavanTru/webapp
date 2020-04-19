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
            {/* {this.state.mainContent} */}
            
            <Switch>
              <Route path="/register" exact component={RegisterWasherOrWashee} />
              <Route path="/" exact component={ListLndryJobsComponent} />
              <Route path="/:id" component={LndryJobDetailsComponent} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;