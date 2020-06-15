import ScheduleSelector from 'react-schedule-selector';
import React, { Component } from "react";
import { Container, Col, Card, Button, Row } from "react-bootstrap";
import WasherDataService from "../service/WasherDataService";
import { SessionContext } from "../Session";

// Page that Washer can access to control their schedule options
class WasherSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
            startDate: new Date() //Calendar loads with today's date by default
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.getWasherSchedule = this.getWasherSchedule.bind(this);
        this.changeToNextWeek = this.changeToNextWeek.bind(this);
    }

    componentDidMount() {
        this.getWasherSchedule();
    }

    handleChange = newSchedule => {
        this.setState({ schedule: newSchedule });
        WasherDataService.updateWasherSchedule(this.context.id, this.state.schedule);
    }

    getWasherSchedule() {
        WasherDataService.retrieveWasher(this.context.id)
            .then(
                response => {
                    this.setState({ schedule: response.data.availableHours })
                }
            )
    }
    handleOnClick() {
        this.props.history.push("/dashboard");
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
                    <p >You are your own boss in LavanTru! Select the times when you will be available to offer your service. Washees can request a wash only during the hours when you are available.</p>
                    <Card className="p-3">
                        <ScheduleSelector
                            selection={this.state.schedule}
                            numDays={5}
                            minTime={8}
                            maxTime={22}
                            onChange={this.handleChange}
                            dateFormat={"DD/MM"}
                            startDate={this.state.startDate}
                            selectedColor="#0f7d80"
                            unselectedColor="#d1f8fa"
                            hoveredColor="#15b1b7"
                        />
                    </Card>
                    <Row>
                        <Col><Button className="button-green m-3 float-right" onClick={this.handleOnClick}>Confirm</Button></Col>
                    </Row>
                </Col>
            </Container>

        )
    }
}
WasherSchedule.contextType = SessionContext;
export default WasherSchedule;