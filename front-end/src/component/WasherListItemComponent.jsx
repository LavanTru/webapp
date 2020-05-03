import React, { Component } from 'react';
import { Container, Col, Row,} from "react-bootstrap";
import WasherDataService from '../service/WasherDataService';
import WasherJobCapabilitiesComponent from '../component/WasherJobCapabilitiesComponent'

class WasherListItemComponent extends Component{
        constructor(props){
            super(props)
            this.state = {
                washerId: this.props.match.param.id,
                washerImage: '',
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
            WasherDataService.retrieveWasher(this.state.washerId)
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
            WasherDataService.retrieveWasher(this.state.washerId)
                .then(
                    response => {
                        this.setState({
                            washerName: response.data.firstName,
                            washerCity: response.data.city,
                            jobCapabilities: response.data.jobCapabilities
                            
                        })
                    }
                )
        }

        render(){
            return(
                <Container className="washerListUnit">
                    //two columns with the second having a set of 3 rows, last of which having 3 columns
                     <Row className="unitDisplay">
                        <Col>
                            <div>
                                <img className="washerListImage" src={this.state.washerImage} />
                            </div>
                        </Col>
                        <Col xs={6}>
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
                                        washerJob => <Col><h5>{(washerJob.active) ? (washerJob.job) : ""}</h5></Col>
                                    )
                                }
                            </Row>

                        </Col>
                     </Row>
                </Container>
            )
        }

}
export default WasherListItemComponent