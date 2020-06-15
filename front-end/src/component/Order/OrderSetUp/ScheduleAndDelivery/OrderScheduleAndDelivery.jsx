import CustomScheduler from './CustomScheduler';
import React, { Component } from "react";
import { Container, Col, Row, Card, Button, Alert } from "react-bootstrap";
import WasherDataService from "../../../../service/WasherDataService";
import { SessionContext } from "../../../../Session";
import { format } from "date-fns";
import CustomStepper from "../CustomStepper";

// Second step of the order flow. User selects schedule and delivery options
class OrderScheduleAndDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.location.state.order,
            schedule: [],
            startDate: new Date(), //Calendar loads with today's date by default
            dropOffDate: "",
            pickUpDate: "",
            alertMessage: "",
            deliveryByWashee: true,
            deliveryPrice: 0
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.getWasherSchedule = this.getWasherSchedule.bind(this);
        this.changeToNextWeek = this.changeToNextWeek.bind(this);
        this.handleDropOffByWasheeClick = this.handleDropOffByWasheeClick.bind(this);
    }
    componentDidMount() {
        this.getWasherSchedule();
    }
    handleDropOffDateChange = (event) => {
        if (event.target.dataset.availablecell === "true") {
            this.setState({ dropOffDate: new Date(event.target.id), alertMessage: "" });
        } else {
            this.setState({ alertMessage: "Washer is not available at the selected time" })
        }
    }
    handlePickUpDateChange = (event) => {
        if (event.target.dataset.availablecell === "true") {
            this.setState({ pickUpDate: new Date(event.target.id), alertMessage: "" });
        } else {
            this.setState({ alertMessage: "Washer is not available at the selected time" })
        }
    }
    getWasherSchedule() {
        WasherDataService.retrieveWasher(this.state.order.washerId)
            .then(
                response => {
                    // Find the price of delivery from Washer data
                    const deliveryJob = response.data.jobCapabilities.find((job) => job.job === "Pickup and delivery");
                    let deliveryPrice = 0;
                    if (deliveryJob) {
                        deliveryPrice = deliveryJob.price;
                    }
                    this.setState({
                        schedule: response.data.availableHours,
                        deliveryPrice: deliveryPrice
                    });
                }
            )
    }
    handleOnClick() {
        if (this.state.pickUpDate && this.state.dropOffDate) {
            // Update order with new schedule related dates and delivery info
            let order = this.state.order;
            order.pickUpDate = this.state.pickUpDate;
            order.dropOffDate = this.state.dropOffDate;
            order.deliveryByWashee = this.state.deliveryByWashee;
            // Update order total for delivery price
            if (!order.deliveryByWashee) {
                order.orderTotal = order.orderTotal + this.state.deliveryPrice;
            }
            this.props.history.push({
                pathname: "/orderConfirmation",
                state: { order: order, washer: this.props.location.state.washer }
            });
        } else {
            this.setState({ alertMessage: "You need to select drop off and pick up times before you can continue" })
        }
    }
    changeToNextWeek() {
        this.setState({
            startDate: this.addDays(this.state.startDate, 7)
        })
    }
    changeToPreviousWeek() {
        this.setState({
            startDate: this.addDays(this.state.startDate, -7)
        })
    }
    addDays(date, days) {
        let newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }
    handleDropOffByWasheeClick() {
        this.setState({
            deliveryByWashee: !this.state.deliveryByWashee
        })
    }
    renderDelivery() {
        if (this.state.deliveryPrice) {
            return (
                <Row>
                    <div onClick={this.handleDropOffByWasheeClick} className={"clickable delivery-left " + (this.state.deliveryByWashee ? "delivery-active" : "")}>You go to Washer</div>
                    <div onClick={this.handleDropOffByWasheeClick} className={"clickable delivery-right " + (!this.state.deliveryByWashee ? "delivery-active" : "")}> Washer comes to you +{this.state.deliveryPrice}€</div>
                </Row>
            )
        } else {
            return (
                <h6>This Washer does not offer delivery so it will be on you</h6>
            )
        }
    }
    render() {
        return (
            <Container fluid className="lavantruGreen">
                <Col md={{ span: 8, offset: 2 }} className="pt-4">
                    <CustomStepper activeStep={1} />
                    <h2>Schedule and delivery</h2>
                    <p >Please select how and when you want your order to be completed. The times when Washer is available are highlighted in green.</p>
                    {this.state.alertMessage && <Alert variant="danger" >{this.state.alertMessage}</Alert>}
                    <Col md={{ span: 8, offset: 3 }}>
                        {this.renderDelivery()}
                    </Col>
                    <Row className="pt-4">
                        <Col className="pl-0">
                            <Card>
                                <Card.Header className="py-1 my-0">
                                    <Row>
                                        <Col md="auto" className="p-1"><h4 className="font-weight-bold">Drop off time</h4></Col>
                                        {/* "kk:mm, MMM d" formats time as "24:00, Jun 14" */}
                                        <Col className="p-1 m-1"><p className="float-right m-0">{this.state.dropOffDate ? format(this.state.dropOffDate, "kk:mm, MMM d") : "Select slot from the calendar"}</p></Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="p-2">
                                    <CustomScheduler
                                        schedule={this.state.schedule}
                                        onClick={this.handleDropOffDateChange}
                                        dateFormat={"dd/MM"}
                                        startDate={this.state.startDate}
                                        activeDate={this.state.dropOffDate}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="pr-0">
                            <Card>
                                <Card.Header className="py-1 my-0">
                                    <Row>
                                        <Col md="auto" className="p-1"><h4 className="font-weight-bold">Pick up time</h4></Col>
                                        {/* "kk:mm, MMM d" formats time as "24:00, Jun 14" */}
                                        <Col className="p-1 m-1"><p className="float-right m-0">{this.state.pickUpDate ? format(this.state.pickUpDate, "kk:mm, MMM d") : "Select slot from the calendar"}</p></Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="p-2">
                                    <CustomScheduler
                                        schedule={this.state.schedule}
                                        onClick={this.handlePickUpDateChange}
                                        dateFormat={"dd/MM"}
                                        startDate={this.state.startDate}
                                        activeDate={this.state.pickUpDate}

                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={{ span: 2, offset: 10 }}>
                            <Button className="button-green m-3" onClick={this.handleOnClick}>Confirm</Button>
                        </Col>
                    </Row>
                </Col>
            </Container >
        )
    }
}
OrderScheduleAndDelivery.contextType = SessionContext;
export default OrderScheduleAndDelivery;