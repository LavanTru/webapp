import React, {Component} from 'react';
import WasherDataService from '../service/WasherDataService';

class OrderComponent extends Component{

    constructor(){
        super()
        this.state = {
            washerId : '5eac72ed6cf88c6bc3b2631a',
            washer : [],
            jobs : [],
            order : []
        }

    }

    componentDidMount() {
        this.getWasherData();
    }

    getWasherData(){
        WasherDataService.retrieveWasher(this.state.washerId)
        .then(
            response => {
                this.setState({washer: response.data})
                console.log(this.state.washer)
            }
        )
        WasherDataService.getActiveJobs(this.state.washerId)
        .then(
            response => {
                this.setState({jobs: response.data})
                console.log(this.state.jobs)
            }
        )
    }

    render(){
        return(
        <div className='container'>
            <div className='row'>
                <h3>{this.state.washer.firstName} {this.state.washer.lastName}</h3>
            </div>
            <div className='row'>
                <p>{this.state.washer.aboutMe}</p>
            </div> 

            <div className="col-md-6">
                <div className="card w-100" >
                    <div className="card-header">
                        Select from my services
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.state.jobs.map(jobItem => 
                            <li className="list-group-item" key={jobItem.id}>
                            
                            <div className="card w-100">
                            <div className="card-body">
                                <h5 className="card-title">{jobItem.job}</h5>
                                <p className="card-text">{jobItem.speed}</p>
                                <a href="#" className="btn btn-success">Add</a>
                            </div>
                            </div>

                                
                            </li>)
                        }
                    </ul>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea2">Any special indications?</label>
                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" maxLength="100"></textarea>
            </div>
            <div className="row">
                <button className="btn btn-success">Add to my bag</button>
            </div>
        </div>
        );
    }

}

export default OrderComponent;
