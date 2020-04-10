import React, { Component } from 'react';
import ListLndryJobsComponent from './ListLndryJobsComponent';
import LndryJobDetailsComponent from './LndryJobDetailsComponent';
import Loginscreen from '../LoginScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

/**React Component representing the high-level structure of the application. 
 * Routing is defined in this file.**/
class LavantruApp extends Component {
    render() {
        return (
            <Router>
            <>
              <h1>LavanTru App</h1>
              <Loginscreen/>
                <Switch>
                    <Route path="/" exact component={ListLndryJobsComponent} />
                    <Route path="/:id" component={LndryJobDetailsComponent} />
                </Switch>
            </>
            </Router>
        )
    }
}

export default LavantruApp