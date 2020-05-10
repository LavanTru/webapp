import React from 'react';
import { Col, Row } from "react-bootstrap";

const WasherOrderListItem = (props) => {
    return (
        <Row className="header m-3" >
            <Col md={4}><img className="image float-left" src={props.order.washeeImage} alt="profile_picture" /></Col>
            <Col >
                <Row> <h3 className="text-center">Order from {props.order.washeeFirstName}</h3> </Row>
                <b>Services:</b>
                {props.order.items.map(
                    item =>
                        <div>{item.job}</div>
                )}
            </Col>
            <Col className="text-center my-5" md={2}>
                <h1>€ 30</h1>
                <b>{(props.order.status=== "NEW")? "":props.order.status}</b>
            </Col>
        </Row>
    )
}
export default WasherOrderListItem;