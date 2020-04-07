import React, { Component } from 'react';
import ListLndryJobsComponent from './ListLndryJobsComponent';

class LndryJobComponent extends Component {
    render() {
        return (
            <>
              <h1>Laundry Job</h1>
              <ListLndryJobsComponent/>
            </>
        )
    }
}

export default LndryJobComponent