import React, {Component} from 'react';
import WasherDataService from '../service/WasherDataService';
import { Container, Col, Row } from "react-bootstrap";
import QuantityControl from './QuantityControl';

class OrderComponent extends Component{

    constructor(){
        super()
        this.state = {
            washeeId : '5e763c3ea65eaf400c234e7a',
            washerId : '5eaec46daba8b71ff7b280c4',
            washer : [],
            jobs : [],
            items : [],
            order : [],
            amount : 0,
            totalAmount : 0,
            orderTotal : 0
        }
        this.addItem = this.addItem.bind(this);
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

    addItem(jobId, job, price) {
        return (event) => { 
            let totalPrice = this.state.amount * price
            let myArray = [...this.state.items, {jobId: jobId, job: job, amount: this.state.amount, totalPrice: totalPrice}]
            this.setState({items: myArray})
            this.setState({totalAmount : (this.state.totalAmount + this.state.amount)})
            this.setState({orderTotal : (this.state.orderTotal + totalPrice)})
            console.log(this.state)
        }

    }

    render(){
        const bag = this.state.items.map(item => (
            <Row key={item.job+item.id}>
                <Col>{item.job}</Col> 
                <Col>{item.amount}</Col>
                <Col>€{item.totalPrice}</Col>
            </Row>
        ))
        return(
        <Container>
            <Row>
               <Col><h3>{this.state.washer.firstName} {this.state.washer.lastName}</h3></Col> 
            </Row>
            <Row>
                <Col> <p>{this.state.washer.aboutMe}</p></Col>
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
                                            <p className="card-text">{jobItem.speed} for €{jobItem.price}</p>
                                            <QuantityControl name={jobItem.job} parentCallback={(value) => {this.setState({amount: value+1})}}/> {/* patching the amount with hardcode */}
                                            <button className="btn btn-success" onClick={this.addItem(jobItem.id, jobItem.job, jobItem.price)} >Add</button>
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
                                <div>
                                {bag}
                                <Row className="mt-2">
                                    <Col><b>Total</b></Col> 
                                    <Col><b>{this.state.totalAmount}</b></Col>
                                    <Col><b>€{this.state.orderTotal}</b></Col>
                                </Row>
                                </div>
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
        </Container>
        );
    }

}

export default OrderComponent;
