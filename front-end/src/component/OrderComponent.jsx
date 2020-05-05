import React, {Component} from 'react';
import WasherDataService from '../service/WasherDataService';
import { Container, Col, Row } from "react-bootstrap";
import QuantityControl from './QuantityControl';

class OrderComponent extends Component{

    constructor(){
        super()
        this.state = {
            washerId : '5eaec46daba8b71ff7b280c4',
            washer : [],
            jobs : [],
            order : [],
            test: 0
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

    didplayTest = () => {
        console.log("Test data", this.state.test)
    }

    render(){
        return(
        <Container>
            <Row>
                <h3>{this.state.washer.firstName} {this.state.washer.lastName}</h3>
            </Row>
            <Row>
                <p>{this.state.washer.aboutMe}</p>
            </Row> 

            <Col>
                <Row className="mt-2">
                    <Col md={6}>
                        <div className="card w-100" >
                            <div className="card-header">
                                Select from {this.state.washer.firstName}'s services
                            </div>
                            <ul className="list-group list-group-flush">
                                {this.state.jobs.map(jobItem => 
                                    <li className="list-group-item" key={jobItem.id}>
                                        <div className="card w-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{jobItem.job}</h5>
                                            <p className="card-text">{jobItem.speed}</p>
                                            <QuantityControl name={jobItem.job} parentCallback={(value) => {this.setState({test: value})}}/>
                                            <a href="#" className="btn btn-success" onClick={this.didplayTest} >Add</a>
                                        </div>
                                        </div>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        
                        <div className="card w-100" >
                            <div className="card-header">
                                Your bag summary
                            </div>
                            <div className="card-body">
                                Body
                                <div className="form-group mt-5">
                                    <label htmlFor="exampleFormControlTextarea2">Any special indications?</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" maxLength="100"></textarea>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-success">Checkout your bag</button>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Col>
            

            

                
            <div className="row">
               
            </div>
        </Container>
        );
    }

}

export default OrderComponent;
