import React from 'react';
import { Col, Row } from "react-bootstrap";

const WasheeOrderListItem = (props) => {
    return (
        <Row className="clickable item m-3" onClick={props.onClick}>
            <Col xs sm="auto" className="p-0"><img className="image float-left" src={props.order.washerImage} alt="profile_picture" /></Col>
            <Col >
                <Row> <h4 className="text-center">Order to {props.order.washerFirstName}</h4> </Row>
                <h6>Services:</h6>
                {props.order.items.map(
                    item =>
                        <div>{item.job}</div>
                )}
            </Col>
            <Col className="text-center my-3" md="auto">
                <h1 >€ 30</h1>
                <b>{props.order.status}</b>
            </Col>
        </Row>
    )
}
export default WasheeOrderListItem;