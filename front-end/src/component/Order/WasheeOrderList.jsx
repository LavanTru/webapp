import React, { Component } from 'react';
import OrderDataService from "../../service/OrderDataService";
import { SessionContext } from "../../Session";
import WasheeOrderListItem from "./WasheeOrderListItem"


class WasheeOrderList extends Component {
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
        OrderDataService.getOrdersByWasheeId(this.context.id)
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
            <div className="washeeOrderList">
                        <h4>Active orders:</h4>
                        {
                            orderListStatusNew.map(
                                order =>
                                // Need to add onClick methods in order to have clickable orders
                                    <WasheeOrderListItem order={order} />
                            )
                        }
                        <h4>Past orders:</h4>
                        {
                            orderListStatusOther.map(
                                order =>
                                    <WasheeOrderListItem order={order} />
                            )
                        }

            </div>
        );
    }


}
WasheeOrderList.contextType = SessionContext;

export default WasheeOrderList;