import ScheduleSelector from 'react-schedule-selector';
import React, { Component } from "react";
import { Container, Col, Card, Button } from "react-bootstrap";
import WasherDataService from "../../service/WasherDataService";
import { SessionContext } from "../../Session";

class WasherSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: []
        }
        this.updateWasherSchedule = this.updateWasherSchedule.bind(this);
        this.getWasherSchedule = this.getWasherSchedule.bind(this);
    }

    componentDidMount() {
        this.getWasherSchedule();
    }

    handleChange = newSchedule => {
        this.setState({ schedule: newSchedule });
        WasherDataService.updateWasherSchedule(this.context.id,this.state.schedule);
    }

    getWasherSchedule(){
        WasherDataService.retrieveWasher(this.context.id)
        .then(
            response => {
                this.setState({schedule: response.data.availableHours})
            }
        )
    }

    updateWasherSchedule(){
        console.log("availableHours",this.state.schedule);
        // WasherDataService.updateWasherSchedule(this.context.id,this.state.schedule)
    }

    render() {
        return (
            <Container fluid>
                <Col md={{ span: 8, offset: 2 }} className="pt-4">
                    <h2>Please select your schedule</h2>
                    <p >You are your own boss in LavanTru! Select the times when you will be available to offer your service. Washees can request a wash only during the hours when you are available.</p>
                    {/* <div class="washerSchedule"> */}
                    <Card className ="p-3">
                        <ScheduleSelector
                            selection={this.state.schedule}
                            numDays={5}
                            minTime={8}
                            maxTime={22}
                            onChange={this.handleChange}
                            dateFormat={"ddd (D.MM)"}
                        />
                    </Card>
                    {/* </div> */}
                    <Button className ="button-green m-3 float-right" onClick = {this.updateWasherSchedule}>Confirm</Button>
                </Col>
            </Container>

        )
    }

}
WasherSchedule.contextType = SessionContext;
export default WasherSchedule;