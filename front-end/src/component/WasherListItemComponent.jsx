import React, { Component } from 'react';
import { Container, Col, Row, Button} from "react-bootstrap";
import WasherDataService from '../service/WasherDataService';
import WasherListJobs from '../component/WasherListJobs';

class WasherListItemComponent extends Component{
        constructor(props){
            super(props)
            this.state = {
                washerPicture:'',
                washerName: '',
                washerCity: '',
                jobCapabilities: []
            }
        }

        componentDidMount() {
            this.refreshWasherJobCapabilities();
            this.refreshWasherDetails();
        }

        refreshWasherDetails() {
            WasherDataService.retrieveWasher(this.props.washerId)
                .then(
                    response => {
                        console.log(response.data)
                        this.setState({ washerName: response.data.firstName,
                                        washerImage: response.data.image})
                    }
                )
            console.log(this.state.washerDetails)
        }

        refreshWasherJobCapabilities() {
            WasherDataService.retrieveWasher(this.props.washerId)
                .then(
                    response => {
                        console.log("My response", response.data);
                    
                        this.setState({ 
                            washerPicture: response.data.image,
                            washerName: response.data.firstName,
                            washerCity: response.data.addresses[0].city,
                            jobCapabilities: response.data.jobCapabilities,
                            
                        })
                        console.log("State", this.state)
                    }
                )
        }

        render(){
            return(
                <Container>
                     <Row>
                        <Col md={4}>
                            <div>
                                <img className="unitImage" src={this.state.washerPicture} />
                            </div>
                        </Col>
                        <Col md={6} className="align-details">
                            <Row className="align-name">
                                <Col >
                                    <div > 
                                        {this.state.washerName}  
                                    </div>
                                </Col>
                            </Row>
                            <Row className="align-city">
                                <Col>
                                    <div >
                                        <p>{this.state.washerCity}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="align-jobs">
                                {
                                    this.state.jobCapabilities.map(
                                        washerJob => 
                                            <WasherListJobs key={washerJob.id} washerJob={washerJob} />
                                        )
                                }
                            </Row>  
                        </Col>
                        <Col >
                            <Row className = "align-button">
                                <Button className="button-green">Details</Button>
                            </Row>
                        </Col>
                    </Row>   
                </Container>
            )
        }
}
export default WasherListItemComponent