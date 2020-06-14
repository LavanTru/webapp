import React from 'react';
import { Col, Row } from "react-bootstrap";

const WasheeOrderListItem = (props) => {
    return (
        <Row className="clickable item m-3" onClick={props.onClick}>
            <Col xs sm="auto" className="p-0"><img className="image float-left" src={props.order.washerImage} alt="profile_picture" /></Col>
            <Col >
                <Row>   <h4 className="text-center">{props.order.washerFirstName} works in your order</h4> </Row>
                <h6>{props.order.deliveryByWashee ? "You go to washer"  : "Washer comes to you"}</h6>
                <p>Give laundry: {props.order.pickup}</p>
                <p>Receive laundry: {props.order.dropoff}</p>
            </Col>
            <Col className="text-center my-3" md="auto">
                <h1 >€{props.order.orderTotal}</h1>
                <b>{props.order.status}</b>
            </Col>
        </Row>
    )
}
export default WasheeOrderListItem;