import React, { Component } from 'react';
import OrderDataService from "../service/OrderDataService";
import { SessionContext } from "../Session";


class WasherOrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
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
                New items:
                {
                    orderListStatusNew.map(
                        order =>
                            <div>{order.id}</div>
                    )
                }
                                Other items:
                {
                    orderListStatusOther.map(
                        order =>
                            <div>{order.id}</div>
                    )
                }
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