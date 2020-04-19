import React, { Component } from 'react';
import { Form, Col, Button, InputGroup } from "react-bootstrap";

class RegisterWasher extends Component {
    render() {
        return (
            <div>
                <h1 className="lavantruGreen m-5"
                >Enter your contact information</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Row >
                        <Form.Group controlId="formGridCountryCode">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Group as={InputGroup} controlId="formGridPhone">
                                <Form.Control placeholder="+34" />
                                <Form.Control placeholder="555 55 55 55" />

                            </Form.Group>
                        </Form.Group>


                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        );
    }
}

export default RegisterWasher;