import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class LoginModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Modal {...this.props}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                </Button>
                        <Button variant="primary" onClick={this.props.onHide}>
                            Save Changes
                </Button>
                
                Don't have an account? Sign up
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default LoginModal;