import React, { Component } from 'react';
import { Container, Col, Row,} from "react-bootstrap";
import WasherDataService from '../service/WasherDataService';


class WasherListItemComponent extends Component{
        constructor(props){
            super(props)
            this.state = {
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
                <Container className="washerListUnit">
                     <Row className="unitDisplay">
                        <Col>
                            <div>
                                <img className="washerListImage" src="http://www.freedigitalphotos.net/images/previews/sand-dunes-and-grass-vegetation-background-100379140.jpg" />
                            </div>
                        </Col>
                        <Col >
                            <Row>
                            <div className="washerListName">
                                <h3>{this.state.washerName}</h3>    
                            </div>
                            </Row>
                            <Row>
                                <div>
                                    <p>{this.state.washerCity}</p>
                                </div>
                            </Row>
                            <Row>
                                {
                                    this.state.jobCapabilities.map(
                                        washerJob => 
                                        <Col>
                                        <p3>{(washerJob.active) ? (washerJob.job) : ""}</p3>
                                        </Col>
                                    )
                                }
                                
                            </Row>

                        </Col>
                     </Row>
                     <tr/>
                </Container>
            )
        }

}
export default WasherListItemComponent