import React from 'react';
import { Col, Row } from "react-bootstrap";

const WasherOrderListItem = (props) => {
    return (
        <Row className="clickable header m-3" onClick={props.onClick}>
            <Col xs sm="auto" className="p-0"><img className="image float-left" src={props.order.washeeImage} alt="profile_picture" /></Col>
            <Col >
                <Row> <h3 className="text-center">Order from {props.order.washeeFirstName}</h3> </Row>
                <h6>{props.order.deliveryByWashee ? "Washee comes to you"  : "You go to washee"}</h6>
                <Row>
                    <Col>
                    <p><b>Services requested:</b>{props.order.items.map(
                        item =>
                            <div>{item.job}</div>
                    )}</p>
                    
                    </Col>
                    <Col>
                    <p>Give laundry: {props.order.pickup}</p>
                    <p>Receive laundry: {props.order.dropoff}</p>
                    </Col>
                </Row>
                
            </Col>
            <Col className="text-center my-5" md="auto">
                <h1 >€ {props.order.orderTotal}</h1>
                <b>{(props.order.status === "NEW") ? "" : props.order.status}</b>
            </Col>
        </Row>
    )
}
export default WasherOrderListItem;