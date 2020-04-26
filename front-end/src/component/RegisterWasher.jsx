import React, { Component } from 'react';
import { Form, Col, Button, Container } from "react-bootstrap";
import WasherDataService from "../service/WasherDataService";

class RegisterWasher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNo: "",
            streetName: "",
            buildingNo: "",
            apartmentNo: "",
            postCode: "",
            city: "",
            aboutMe: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    render() {
        return (
            <Container fluid >

                <Col md={{ span: 6, offset: 3 }} >
                    <h1 className="lavantruGreen m-5"
                    >Enter your profile information</h1>
                    <Form onChange={this.handleChange}>
                        <Form.Row>
                            <Form.Group as={Col} md={6} controlId="formGridPhone">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control name="phoneNo" placeholder="+34 555 55 55 55" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridStreet">
                                <Form.Label>Street</Form.Label>
                                <Form.Control name="streetName" placeholder="Street name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" placeholder="City" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridHouse">
                                <Form.Label>House no.</Form.Label>
                                <Form.Control name="buildingNo" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridApartment">
                                <Form.Label>Apartment no.</Form.Label>
                                <Form.Control name="apartmentNo" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip code</Form.Label>
                                <Form.Control name="postCode" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md={12} controlId="formGridAboutMe">
                                <Form.Label>About me</Form.Label>
                                <Form.Control name="aboutMe" rows="5" as="textarea" placeholder="Write here a short description about yourself" />
                            </Form.Group>
                        </Form.Row>


                        <Col sm={{ span: 4, offset: 4 }} >
                            <Button className="button-green mt-5" size="lg" block onClick={this.handleSignUp} >
                                Sign up
                         </Button>
                        </Col>

                    </Form>
                </Col>
            </Container>
        );
    }

    // Method to record the changes in the form in a component state variable
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSignUp() {
        const parentState = this.props.location.state;
        const address = {
            streetName: this.state.streetName,
            buildingNo: this.state.buildingNo,
            apartmentNo: this.state.apartmentNo,
            postCode: this.state.postCode,
            city: this.state.city,
            defaultAddress: true
        };
        WasherDataService.register(
            this.props.location.state.firstName,
            parentState.lastName,
            parentState.email,
            parentState.password,
            this.state.phoneNo,
            "PERSONAL",
            null,
            true, //ask consent
            ["123"], //ask details
            [address])
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Registration successfull");
                    // TODO change redirect to some default page and log in
                    this.props.history.push("/");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default RegisterWasher;