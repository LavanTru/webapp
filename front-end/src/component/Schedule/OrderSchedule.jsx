import CustomScheduler from './CustomScheduler';
import React, { Component } from "react";
import { Container, Col, Row, Card, Button, Accordion, Alert } from "react-bootstrap";
import WasherDataService from "../../service/WasherDataService";
import OrderDataService from "../../service/OrderDataService";
import { SessionContext } from "../../Session";
import { format } from "date-fns";

class OrderSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
            startDate: new Date(), //Calendar loads with today's date by default
            dropOffDate: "",
            pickUpDate: "",
            alertMessage: ""
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.getWasherSchedule = this.getWasherSchedule.bind(this);
        this.changeToNextWeek = this.changeToNextWeek.bind(this);
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
        WasherDataService.retrieveWasher(this.props.location.state.washerId)
            .then(
                response => {
                    this.setState({ schedule: response.data.availableHours })
                }
            )
    }

    handleOnClick() {
        if (this.state.pickUpDate && this.state.dropOffDate) {
            // Update order in DB with new schedule related dates
            let order = this.props.location.state.order;
            order.pickUpDate = this.state.pickUpDate;
            order.dropOffDate = this.state.dropOffDate;
            OrderDataService.updateOrder(order)
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Order update successfull");

                        // TODO: add redirecting to a new page
                    }
                })
                .catch(function (error) {
                    console.log(error);
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
    render() {
        return (
            <Container fluid className="lavantruGreen">
                <Col md={{ span: 8, offset: 2 }} className="pt-4">
                    <h2>Please select your schedule</h2>
                    <p >The times when Washer is available are highlighted in green.</p>
                    {this.state.alertMessage && <Alert variant="danger" >{this.state.alertMessage}</Alert>}
                    <Row>
                        <Col className="pl-0">
                            <Card>
                                <Card.Header className="py-1 my-0">
                                    <Row>
                                        <Col md="auto" className="p-1"><h4 className="font-weight-bold">Drop off time</h4></Col>
                                        {/* "PPp formats time as "05/29/1453, 12:00 AM" */}
                                        <Col className="p-1 m-1"><p className="float-right m-0">{this.state.dropOffDate ? format(this.state.pickUpDate, "PPp") : "Select slot from the calendar"}</p></Col>
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
                                        {/* "PPp formats time as "05/29/1453, 12:00 AM" */}
                                        <Col className="p-1 m-1"><p className="float-right m-0">{this.state.pickUpDate ? format(this.state.pickUpDate, "PPp") : "Select slot from the calendar"}</p></Col>
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

                    <Button className="button-green m-3 float-right" onClick={this.handleOnClick}>Confirm</Button>
                </Col>
            </Container >

        )
    }

}
OrderSchedule.contextType = SessionContext;
export default OrderSchedule;