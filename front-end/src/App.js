import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DefaultReactPage from './DefaultReactPage';
import AppBar from 'material-ui/AppBar';
import LoginScreen from './LoginScreen';
import ListLndryJobsComponent from './component/ListLndryJobsComponent';
import LndryJobDetailsComponent from './component/LndryJobDetailsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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
            <h1>LavanTru App</h1>
            <MuiThemeProvider>

              <AppBar
                title="Login"
              />
            </MuiThemeProvider>
            {this.state.mainContent}
            
            <Switch>
              <Route path="/" exact component={ListLndryJobsComponent} />
              <Route path="/:id" component={LndryJobDetailsComponent} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;