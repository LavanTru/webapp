import React, { Component } from 'react';
import ListLndryJobsComponent from './ListLndryJobsComponent';
import LndryJobDetailsComponent from './LndryJobDetailsComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class LndryJobComponent extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Laundry Job</h1>
                    <Switch>
                        <Route path="/" exact component={ListLndryJobsComponent} />
                        <Route path="/:id" component={LndryJobDetailsComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default LndryJobComponent