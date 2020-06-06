import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ModalContainer from "../Modal/ModalContainer";
import NavBarLoginInfo from "./NavBarLoginInfo";
import OrderDataService from "../../service/OrderDataService";
import { SessionContext } from "../../Session";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModalShow: false,
            isRegistered: true,
            newOrders: ""
        };
        this.handleLoginModal = this.handleLoginModal.bind(this);
        this.handleChangeIsRegistered = this.handleChangeIsRegistered.bind(this);
        this.refreshOrderList = this.refreshOrderList.bind(this);
    }

    componentDidMount() {
        this.refreshOrderList();
    }

    handleLoginModal() {
        this.setState({ loginModalShow: !this.state.loginModalShow });
    };

    handleChangeIsRegistered() {
        this.setState({ isRegistered: !this.state.isRegistered });
    };

    refreshOrderList() {
        if (this.context && this.context.userType === "WASHER") {
            OrderDataService.getOrdersByWasherId(this.context.id)
                .then(
                    response => {
                        this.setState({
                            newOrders: (response.data.filter(order => order.status === "NEW").length === 0 ? "" : response.data.filter(order => order.status === "NEW").length)
                        })
                    }
                )
        }
    }

    render() {
        return (
            <Navbar className="navbar" expand="lg" >
                <Navbar.Brand href="#home">LavanTru</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/washers">Washers</Nav.Link>
                        <Nav.Link href="/washerOrderList">Orders{this.state.newOrders && < span className="notifications"> {this.state.newOrders} </span>}</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavBarLoginInfo handleChangeIsRegistered={this.handleChangeIsRegistered} handleLoginModal={this.handleLoginModal} />
                        <ModalContainer
                            show={this.state.loginModalShow}
                            onHide={this.handleLoginModal}
                            isRegistered={this.state.isRegistered}
                            handleChangeIsRegistered={this.handleChangeIsRegistered}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
NavBar.contextType = SessionContext;

export default NavBar;