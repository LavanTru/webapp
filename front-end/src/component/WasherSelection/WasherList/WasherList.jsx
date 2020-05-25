import React, { Component } from 'react';
import { Container, Row, } from "react-bootstrap";
import WasherListItemComponent from './WasherListItemComponent';


class WasherList extends Component {
    render() {
        return (
            <Container className="washerList">
                {
                    this.props.washers.map(
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
export default WasherList