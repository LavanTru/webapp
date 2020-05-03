import React, { Component }  from 'react';

import WasherListItemComponent from '../component/WasherListItemComponent'
import WasherDataService from '../service/WasherDataService'


class WasherListComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            washers: []
        }
        this.refreshAllWashers = this.refreshAllWashers.bind(this)
    }

    componentDidMount() {
            this.refreshWasherDetails();
    }

    refreshAllWashers() {
        WasherDataService.retrieveAllWasher()
            .then(
                response => {
                    console.log(response);
                    this.setState({washers: response.data});
                }
            )
    }

    render(){
        return(
            <div>
                {
                    this.state.washers.map(function(washer, index){
                        return (
                            <li key={index}>
                                {washer.washerName}
                            </li>
                        )
                    }
                    )

                }
                
            </div>
        )
    }

}
export default WasherListComponent