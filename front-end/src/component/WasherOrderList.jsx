import React, { Component } from 'react';
import OrderDataService from "../service/OrderDataService";
import { SessionContext } from "../Session";
import { Container, Col, Row } from "react-bootstrap";
import WasherOrderListItem from "./WasherOrderListItem"


class WasherOrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
        this.refreshOrderList = this.refreshOrderList.bind(this);
    }

    componentDidMount() {
        this.refreshOrderList();
    }


    render() {
        const orderListStatusNew = this.state.orderList.filter(order => order.status === "NEW");
        console.log("orderListStatusNew", orderListStatusNew);
        const orderListStatusOther = this.state.orderList.filter(order => order.status !== "NEW");
        console.log("orderListStatusOther", orderListStatusOther);
        return (
            <div>
                <Container className="profile" >
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>New orders:</h1>
                        {
                            orderListStatusNew.map(
                                order =>
                                    <WasherOrderListItem order={order} />
                            )
                        }
                        <h1>Past orders:</h1>
                        {
                            orderListStatusOther.map(
                                order =>
                                    <WasherOrderListItem order={order} />
                            )
                        }
                    </Col>
                </Container>

            </div>
        );
    }

    refreshOrderList() {
        OrderDataService.getOrdersByWasherId(this.context.id)
            .then(
                response => {
                    this.setState({
                        orderList: response.data
                    })
                }
            )
    }

}
WasherOrderList.contextType = SessionContext;

export default WasherOrderList;