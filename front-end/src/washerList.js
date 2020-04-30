import React, { Component } from 'react';
import Washer from './components/washer';

class washerList extends Component{
    state = {
        loading: true,
        washers: null,
    }

    async componentDidMount(){
        const url = "http://localhost:8080/api/users/filter/WASHER"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({washers: data.results});
    
    }

    //list returned as defined above
    render(){
        return(
            <div className="WasherList">
                <ul>
                    {
                        this.state.washers.map((user)=>{
                            return(<Washer adresses={washer.adresses}>{washer.name}</Washer>) //pass the elements we want to see
                        })
                    }
                </ul>
            </div>
        );
    }

}