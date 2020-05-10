import React, {Component} from 'react';
import WasherDataService from '../service/WasherDataService';
import { Container, Col, Row, Card, Button, ListGroup, Form} from "react-bootstrap";
import QuantityControl from './QuantityControl';
import OrderDataService from '../service/OrderDataService';
import { Alert } from 'reactstrap';

class OrderComponent extends Component{

    constructor(){
        super()
        this.state = {
            washeeId : '5e763c3ea65eaf400c234e7a',
            washerId : '5eaec46daba8b71ff7b280c4',
            washer : [],
            jobs : [],
            items : [],
            notes: 'Add some notes...',
            amount : 0,
            totalAmount : 0,
            orderTotal : 0
        }
        this.addItem = this.addItem.bind(this);
        this.createOrder = this.createOrder.bind(this);
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

    addItem(jobId, job, price, value) {
        return (event) => { 
            this.setState({amount: value})
            let totalPrice = this.state.amount * price
            let addedItem = [...this.state.items, {jobId: jobId, job: job, amount: this.state.amount, totalPrice: totalPrice}]
            this.setState({items: addedItem})
            this.setState({totalAmount : (this.state.totalAmount + this.state.amount)})
            this.setState({orderTotal : (this.state.orderTotal + totalPrice)}) 
        }

    }

    handleChange = (event) => {
        this.setState({notes: event.target.value}, () => console.log(this.state))
        console.log(this.state.notes)
    };

    createOrder(){
        let order = {
            washeeId: this.state.washeeId,
            washerId: this.state.washerId,
            notes: this.state.notes,
            items: this.state.items
        }
        OrderDataService.createOrder(order)
            .then(
                response => {
                    if (response.status === 200){
                        this.setState({ message: `Your order has been sent.` })
                    }
                })
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
               <Col className='orderHeader'><h3>{this.state.washer.firstName} {this.state.washer.lastName}</h3></Col> 
            </Row>
            <Row>
                <Col className='orderHeader'> <p>{this.state.washer.aboutMe}</p></Col>
            </Row>
            <Col>
                <Row className="mt-2">
                    <Col md={6}>
                        <Card className="card w-100" >
                            <Card.Header>
                                Select from {this.state.washer.firstName}'s services
                            </Card.Header>
                            <ListGroup variant="flush">
                                {this.state.jobs.map(jobItem => 
                                    <ListGroup.Item className="list-group-item" key={jobItem.id}>
                                        <Card className="w-100">
                                        <Card.Body>
                                            <Row>
                                                <Col><h5 className="card-title">{jobItem.job}</h5></Col>
                                                <Col className="priceCol">€{jobItem.price}</Col>
                                            </Row>                  
                                            <p className="card-text">{jobItem.speed}</p>
                                            <QuantityControl name={jobItem.job} parentCallback={(value) => {this.setState({amount: value+1})}}/> {/* patching the amount with hardcode */}
                                            <Button className="button-green" onClick={this.addItem(jobItem.id, jobItem.job, jobItem.price, this.state.amount)} >Add</Button>
                                        </Card.Body>
                                        </Card>
                                    </ListGroup.Item>)
                                }
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col> 
                        <Card className="card w-100" >
                            <Card.Header className="card-header">
                                Your bag summary
                            </Card.Header>
                            <Card.Body>
                                <div>
                                {bag}
                                <Row className="mt-2">
                                    <Col><b>Total</b></Col> 
                                    <Col><b>{this.state.totalAmount}</b></Col>
                                    <Col><b>€{this.state.orderTotal}</b></Col>
                                </Row>
                                </div>
                                <Form.Group className="mt-5">
                                    <Form.Label htmlFor="textAreaNotes">Any special indications?</Form.Label>
                                    <Form.Control as="textarea" rows="3" id="textAreaNotes" placeholder={this.state.notes} maxLength="100" onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button className="button-green" onClick={this.createOrder}>Checkout your bag</Button>
                            </Card.Footer>
                        </Card>
                        {this.state.message && <Alert color="success" >{this.state.message}</Alert>}
                    </Col>
                </Row>
            </Col>
        </Container>
        );
    }

}

export default OrderComponent;
