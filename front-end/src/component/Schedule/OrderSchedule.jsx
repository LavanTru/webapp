import CustomScheduler from './CustomScheduler';
import React, { Component } from "react";
import { Container, Col, Card, Button } from "react-bootstrap";
import WasherDataService from "../../service/WasherDataService";
import { SessionContext } from "../../Session";

class OrderSchedule extends Component {
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

    handleChange = (event) => {
        // this.setState({ schedule: newSchedule });
        // WasherDataService.updateWasherSchedule(this.context.id, this.state.schedule);
        console.log("e",event.target.id);
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
        // console.log("availableHours", this.state.schedule);
        // WasherDataService.updateWasherSchedule(this.context.id,this.state.schedule)
        // TODO: add redirecting to a new page
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
                    <Card className="p-3">
                        <CustomScheduler
                            selection={this.state.schedule}
                            onClick={this.handleChange}
                            dateFormat={"EEEE (d.MM)"}
                            startDate={this.state.startDate}
                            selectedColor="#0f7d80"
                            unselectedColor="#ffe6de"
                            hoveredColor="#15b1b7"
                        />
                    </Card>
                    <Button className="button-green m-3 float-right" onClick={this.handleOnClick}>Confirm</Button>
                </Col>
            </Container>

        )
    }

}
OrderSchedule.contextType = SessionContext;
export default OrderSchedule;