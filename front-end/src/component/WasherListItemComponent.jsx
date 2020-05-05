import React, { Component } from 'react';
import { Container, Col, Row,} from "react-bootstrap";
import WasherDataService from '../service/WasherDataService';
import WasherListJobs from '../component/WasherListJobs';

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
                <Container className="washerList">
                     <Row>
                        <Col class="col-sm-auto">
                            <div>
                                <img className="unitImage" src="http://www.freedigitalphotos.net/images/previews/sand-dunes-and-grass-vegetation-background-100379140.jpg" />
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col className = "unitName">
                                    <div>
                                        <h3>{this.state.washerName}</h3>    
                                    </div>
                    
                                    <Row>
                                        <Col>
                                            <div className="unitCity">
                                                <p>{this.state.washerCity}</p>
                                            </div>
                                            <Row >
                                                {
                                                    this.state.jobCapabilities.map(
                                                        washerJob => 
                                                            <WasherListJobs key={washerJob.id} washerJob={washerJob} />
                                                        )
                                                        
                                                        // {this.unitLaundryJobs(washerJob)}
                                                        // washerJob =>{
                                                        //     <Col className="unitLaundryJobs">
                                                        //         {(washerJob.active) ? (washerJob.job) : null}
                                                        //     </Col>
                                                        // }
                                                    // )
                                                
                                                }
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                     
                </Container>
            )
        }

        // unitLaundryJobs(washerJob){
        //    console.log("jobInput", washerJob)
        //    if(washerJob.active){
        //         console.log("Positive if")
        //         return(<Col>{(washerJob.job)}</Col>)
                
        //     }
        //     else{
        //         console.log("Negative if")
        //     }
        // }

}
export default WasherListItemComponent