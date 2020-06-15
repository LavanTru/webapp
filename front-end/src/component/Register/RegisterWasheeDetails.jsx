import React, { Component } from 'react';
import { Form, Col, Button, Container } from "react-bootstrap";
import WasheeDataService from "../../service/WasheeDataService";
import { setSessionCookie } from "../../Session.js";
import GeoCodeService from "../../service/GeoCodeService";

// Ask user details and register them as Washee
class RegisterWashee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            phoneNo: "",
            streetName: "",
            buildingNo: "",
            apartmentNo: "",
            postCode: "",
            city: "",
            acceptsMarketingEmails: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    // Method to record the changes in the form in a component state variable. Need to have special case for checkbox as value cannot be read from checkbox.
    handleChange(event) {
        let value = event.target.name === "acceptsMarketingEmails" ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }
    async handleSignUp() {
        const parentState = this.props.location.state;
        const address = {
            streetName: this.state.streetName,
            buildingNo: this.state.buildingNo,
            apartmentNo: this.state.apartmentNo,
            postCode: this.state.postCode,
            city: this.state.city,
            defaultAddress: true
        };
        const addressWithLocation = await GeoCodeService.getAddressWithLocation(address);
        WasheeDataService.register(
            parentState.firstName,
            parentState.lastName,
            parentState.email,
            parentState.password,
            this.state.phoneNo,
            "PERSONAL",
            null,
            this.state.acceptsMarketingEmails,
            [addressWithLocation],
            null,
            [])
            .then((response) => {
                if (response.status === 200) {
                    console.log("Registration successfull");
                    const user = {
                        // Add here more attributes to be stored in the cookies if needed
                        "id": response.data.id,
                        "firstName": response.data.firstName,
                        "email": response.data.email,
                        "userType": response.data.userType,
                        "addresses": response.data.addresses,
                        "image": response.data.image
                    };
                    setSessionCookie(user);
                    // window.location.reload(false);

                    // Here you can change what happens after successful registration
                    this.props.history.push("/");
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.response && error.response.status === 409) {
                    this.setState({
                        errorMessage: "A user with this e-mail already exists."
                    })
                }
                else {
                    this.setState({
                        errorMessage: "Something went wrong. Try again."
                    })
                }
            });
    }
    render() {
        return (
            <Container fluid >
                <Col md={{ span: 8, offset: 2 }} >
                    <h2 className="my-5 lavantruGreen text-center"
                    >Enter your profile information</h2>
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
                            <Form.Group controlId="formMarketingCheckbox">
                                <Form.Check name="acceptsMarketingEmails" type="checkbox" label="I want to receive occasional marketing emails from LavanTru" />
                            </Form.Group>
                        </Form.Row>

                        <p className="redError">
                            {this.state.errorMessage}
                        </p>

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

}

export default RegisterWashee;