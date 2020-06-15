import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import WasherDataService from '../service/WasherDataService';
import SwitchComponent from './SwitchComponent';
import { Container, Button, Col } from "react-bootstrap";

// Class shown to Washer to control their JobCapabilities
class WasherJobCapabilitiesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            washerCapabilities: [],
            message: null,
            visible: false
        }

        this.refreshWasherJobCapabilities = this.refreshWasherJobCapabilities.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.updateWasherJobCapabilitiesClicked = this.updateWasherJobCapabilitiesClicked.bind(this);
    }

    componentDidMount() {
        this.refreshWasherJobCapabilities();
    }

    refreshWasherJobCapabilities() {
        WasherDataService.retrieveWasher(this.props.location.state.washerId)
            .then(
                response => {
                    this.setState({ washerCapabilities: response.data.jobCapabilities })
                    console.log(this.state.washerCapabilities)
                }
            )
    }

    handleChecked(checked, event, id) {
        function changeActive(job) {
            if (job.id === id) {
                job.active = checked
            }
            return job
        }

        let updatedWasherCapabilities = this.state.washerCapabilities.map(changeActive)
        this.setState({ washerCapabilities: updatedWasherCapabilities })
    }

    handleChange = event => {
        function changeSpeed(job) {
            if (job.id === event.target.id) {
                job.speed = event.target.value
            }
            return job
        }
        let updatedWasherCapabilities = this.state.washerCapabilities.map(changeSpeed)
        this.setState({ washerCapabilities: updatedWasherCapabilities })
    };

    updateWasherJobCapabilitiesClicked() {
        WasherDataService.updateWasherJobCapabilities(this.props.location.state.washerId, this.state.washerCapabilities)
            .then(
                response => {
                    if (response.status === 200) {
                        this.setState({ message: `Your jobs are saved successfully` })
                    } else {
                        this.setState({ message: `Unable to save your jobs. Try again later.` })
                    }
                    this.onShowAlert()
                }
            )
    }

    onShowAlert = () => {
        this.setState({ visible: true }, () => {
            window.setTimeout(() => {
                this.setState({ visible: false })
            }, 3000)
        });
    }

    render() {
        return (
            <Container>
                <Col className="pt-4" md={{ span: 8, offset: 2 }}>
                    <h3>My jobs</h3>
                    {
                        this.state.message && <Alert color="success" isOpen={this.state.visible} >{this.state.message}</Alert>
                    }
                    <p>Select the jobs you offer to your washees:</p>
                    <div className="row">
                        <div className="col">
                            <h6>My job</h6>
                        </div>
                        <div className="col">
                            <h6>Price</h6>
                        </div>
                        <div className="col">
                            <h6>Off/On</h6>
                        </div>
                        <div className="col">
                            <h6>My best speed</h6>
                        </div>
                    </div>
                    {
                        this.state.washerCapabilities.map(
                            washerJob =>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor={washerJob.id}>{washerJob.job}</label>
                                    </div>
                                    <div className="col">
                                        <label htmlFor={washerJob.id}>{washerJob.price}</label>
                                    </div>
                                    <div className="col">
                                        <SwitchComponent
                                            id={washerJob.id}
                                            onChange={this.handleChecked}
                                            checked={washerJob.active}
                                        />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control"
                                            htmlFor={washerJob.id} id={washerJob.id} name={washerJob.id}
                                            value={(washerJob.active) ? (washerJob.speed) : ''}
                                            disabled={(!washerJob.active)} onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                        )
                    }
                    <div className="row">
                        <Button className="button-green" onClick={this.updateWasherJobCapabilitiesClicked}>Save</Button>
                    </div>
                </Col>
            </Container>
        )
    }
}
// WasherJobCapabilitiesComponent.contextType = SessionContext;

export default WasherJobCapabilitiesComponent