import React, {useState} from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import ServiceItem from './ServiceItem';
import ModalContainer from '../Modal/ModalContainer';
import iconWashering from '../../asset/icon/washer.svg';
import iconIroning from '../../asset/icon/iron.svg';
import iconBedding from '../../asset/icon/towel.svg';
import iconDelivery from '../../asset/icon/fashion.svg';

function Section(){
    const [show, setShow] = useState(false);
    const [isRegistered, setRegisteredFlag] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeRegisterFlag = () => setRegisteredFlag(!isRegistered);

    return (
    <section className="info bg-info text-center" id="info">
        <Container>
                <Row className="rolesDesc">
                    <Col>
                        <h2>Free yourself from laundry as a Washee</h2>
                        <p className="text-muted">LavanTru understands that you need time for what is important to you. As a <strong>washee</strong> you can forget doing laundry by hiring a washer services.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Container fluid>
                            <Row>
                                <Col lg={6}>
                                    <ServiceItem source={iconWashering} title="Washing" desc="Choose your favorite washer's laundry service"/>
                                </Col>
                                <Col lg={6}>
                                    <ServiceItem source={iconIroning} title="Ironing" desc="Get your clothes ironed, ready to use them"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <ServiceItem source={iconBedding} title="Bedding & Towels" desc="Your bedding, kitchen and bath clothes are also covered"/>
                                </Col>
                                <Col lg={6}>
                                    <ServiceItem source={iconDelivery} title="Pickup & Delivery" desc="Choose a washer with delivery service to get your clothes at your door"/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="rolesDesc">
                    <Col>
                        <a onClick={handleShow} className="btn btn-outline btn-xl js-scroll-trigger mb-3">Sign up now</a>
                        <ModalContainer 
                            show={show}
                            onHide={handleClose}
                            isRegistered={isRegistered}
                            handleChangeIsRegistered={changeRegisterFlag}
                        />
                    </Col>
                </Row>
        </Container>
    </section>
    );
}

export default Section;