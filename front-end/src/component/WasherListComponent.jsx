import React, { Component }  from 'react';
import { Container, Col, Row,} from "react-bootstrap";
import WasherListItemComponent from '../component/WasherListItemComponent'
import WasherDataService from '../service/WasherDataService'


class WasherListComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            washers: []
        }
        this.refreshAllWashers = this.refreshAllWashers.bind(this)
    }

    componentDidMount() {
            this.refreshAllWashers();
    }

    refreshAllWashers() {
        WasherDataService.retrieveAllWashers()
            .then(
                response => {
                    console.log(response);
                    this.setState({washers: response.data});
                }
            )
    }

    render(){
        return(
            <Container className="washerList">
                {
                    this.state.washers.map(
                        washer =>
                        <Row className="washerListItem">
                            <WasherListItemComponent key={washer.id} washerId={washer.id} />
                            
                        </Row>
                    )
                    
                }
            </Container>
        )
    }

}
export default WasherListComponent