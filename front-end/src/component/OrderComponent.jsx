import React, { Component } from 'react';
import WasherDataService from '../service/WasherDataService';
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  ListGroup,
  Form
} from "react-bootstrap";
import QuantityControl from './QuantityControl';
import OrderDataService from '../service/OrderDataService';
import { Alert } from 'reactstrap';
import { SessionContext } from "../Session";
import WashCycle from './WashCycle';
import WashCycleService from '../service/WashCycleService';
import TemperatureIcons from './TemperatureIcons';

class OrderComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      washerId: this.props.location.state.washerId, //passed down from WasherProfile-ContactCard
      washer: [],
      jobs: [],
      items: [],
      notes: 'Add some notes...',
      amount: 0,
      totalAmount: 0,
      orderTotal: 0,
      washCycles: [],
      program: '',
      temperature: 30
    }
    this.addItem = this.addItem.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  componentDidMount() {
    console.log("washerid", this.props.location.state.washerId)
    this.getWashCycleData();
    this.getWasherData();
    if (this.state.program === '') {
      this.setState({ program: "Let your washer choose" })
    }
  }

  getWasherData() {
    WasherDataService.retrieveWasher(this.state.washerId)
      .then(
        response => {
          this.setState({ washer: response.data })
          console.log(this.state.washer)
        }
      )
    WasherDataService.getActiveJobs(this.state.washerId)
      .then(
        response => {
          this.setState({ jobs: response.data })
          console.log(this.state.jobs)
        }
      )
  }

  getWashCycleData() {
    WashCycleService.getWashCycles()
      .then(
        response => {
          this.setState({ washCycles: response.data })
        }
      )
  }

  addItem(jobId, job, price, value) {
    return () => {
      this.setState({ amount: value })
      let totalPrice = this.state.amount * price
      let addedItem = [...this.state.items, {
        jobId: jobId,
        job: job,
        amount: this.state.amount,
        totalPrice: totalPrice
      }]
      this.setState({ items: addedItem })
      this.setState({ totalAmount: (this.state.totalAmount + this.state.amount) })
      this.setState({ orderTotal: (this.state.orderTotal + totalPrice) })
    }

  }

  handleChange = (event) => {
    this.setState({ notes: event.target.value }, () => console.log(this.state))
    console.log(this.state.notes)
  };

  createOrder() {
    let order = {
      washeeId: this.context.id, //washeeId comes from the logged in user
      washerId: this.state.washerId,
      notes: this.state.notes,
      washCycle: this.state.program,
      items: this.state.items,
      temperature: this.state.temperature
    }
    OrderDataService.createOrder(order)
      .then(
        response => {
          if (response.status === 200) {
            this.setState({ message: `Your order has been sent.` });
            this.props.history.push({
              pathname: "/orderSchedule",
              state: { washerId: this.state.washerId, order: response.data }
            })
          }
        })
  }

  displayWashCycle(job) {
    if (job === "Laundry" || job === "Washing")
      return (
        <>
          <Row>
            <Col><p>Wash cycle program:</p></Col>
            <Col sm={6}>
              <WashCycle cycles={this.state.washCycles}
                program={this.state.program}
                parentCallback={(selectedProgram, selectedTemperature) => { this.setState({ program: selectedProgram }); this.setState({ temperature: selectedTemperature }) }} />
            </Col>
          </Row>
          {this.displayTemperature()}
        </>
      );
  }

  displayTemperature() {
    if (this.state.program !== "Let your washer choose")
      return (
        <Row>
          <Col sm={4}><p>Temperature:</p></Col>
          <Col>
            <TemperatureIcons temperature={this.state.temperature}></TemperatureIcons>
          </Col>
        </Row>
      );
  }

  render() {
    const bag = this.state.items.map(item => (
      <Row key={item.job + item.id}>
        <Col>{item.job}</Col>
        <Col>{item.amount}</Col>
        <Col>€{item.totalPrice}</Col>
      </Row>
    ))
    return (
      <Container fluid>
        <Col className="pt-4" md={{ span: 8, offset: 2 }}>
          <Row>
            <Col className='orderHeader'>
              <h3>{this.state.washer.firstName}</h3>
            </Col>
          </Row>
          <Row>
            <Col className='orderHeader'><p>{this.state.washer.aboutMe}</p>
            </Col>
          </Row>
          <Col>
            <Row className="mt-2">
              <Col md={6}>
                <Card className="card w-100">
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
                            {this.displayWashCycle(jobItem.job)}
                            <Row>
                              <Col>Quantity:</Col>
                              <Col><QuantityControl name={jobItem.job} parentCallback={(value) => { this.setState({ amount: value + 1 }) }} /> {/* patching the amount with hardcode */}</Col>
                            </Row>
                            <Button className="button-pink" onClick={this.addItem(jobItem.id, jobItem.job, jobItem.price, this.state.amount)} >Add</Button>
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
                      <Form.Label htmlFor="textAreaNotes">Any special
                        indications?</Form.Label>
                      <Form.Control as="textarea" rows="3" id="textAreaNotes"
                        placeholder={this.state.notes}
                        maxLength="100"
                        onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <Button className="button-pink" onClick={this.createOrder}>Checkout
                      your bag</Button>
                  </Card.Footer>
                </Card>
                {this.state.message && <Alert
                  color="success">{this.state.message}</Alert>}
              </Col>
            </Row>
          </Col>
        </Col>
      </Container>
    );
  }

}
OrderComponent.contextType = SessionContext;
export default OrderComponent;
