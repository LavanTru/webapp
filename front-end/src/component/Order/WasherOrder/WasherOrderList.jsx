import React, { Component } from 'react';
import OrderDataService from "../../../service/OrderDataService";
import { SessionContext } from "../../../Session";
import { Container, Col } from "react-bootstrap";
import WasherOrderListItem from "./WasherOrderListItem"

// Present orders in a list for the Washer
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
    render() {
        const orderListStatusNew = this.state.orderList.filter(order => order.status === "NEW");
        const orderListStatusOther = this.state.orderList.filter(order => order.status !== "NEW");
        return (
            <div>
                <Container className="profile" fluid >
                    <Col md={{ span: 8, offset: 2 }} className="pt-4">
                        <h3>New orders:</h3>
                        {
                            orderListStatusNew.map(
                                order =>
                                    <WasherOrderListItem order={order} onClick={() => this.props.history.push(`/washerOrder/${order.id}`)} />
                            )
                        }
                        <h3>Past orders:</h3>
                        {
                            orderListStatusOther.map(
                                order =>
                                    <WasherOrderListItem order={order} onClick={() => this.props.history.push(`/washerOrder/${order.id}`)} />
                            )
                        }
                    </Col>
                </Container>

            </div>
        );
    }
}
WasherOrderList.contextType = SessionContext;

export default WasherOrderList;