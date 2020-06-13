import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import iconWashering from '../../asset/icon/water_30.svg';
import iconEco from '../../asset/icon/eco.svg'
import iconSchedule from '../../asset/icon/schedule.svg'
import iconIroning from '../../asset/icon/iron.svg';
import iconDialog from '../../asset/icon/dialog.svg';
import iconDelivery from '../../asset/icon/fashion.svg';
import iconHeart from '../../asset/icon/heart.svg';
import iconLike from '../../asset/icon/like.svg';
import device from '../../asset/image/iphone5.png'

// Section offers a choise of Washer vs Washee to user. Used in landing page and registration flow. 
// As buttons action depends on the context, this component needs two onClick methods as props.
function Section(props) {
    return (
        <section className="info bg-info text-center" id="info">
            <Container>
                <Row>
                    <Col >
                        <Row className="rolesDesc">
                            <Col>
                                <h3>As a Washer</h3>
                                <h5>Create your profile</h5>
                                <Image src={device} className="device-container"></Image>
                                <h5>Earn money at home on your schedule</h5>
                            </Col>
                        </Row>
                    </Col>
                    <div className="vl"></div>
                    <Col>
                        <Row className="rolesDesc">
                            <Col>
                                <h3>As a Washee</h3>
                                <h5>Choose your perfect wash</h5>
                                <Row>
                                    <Col className="item">
                                        <Image src={iconWashering} className="icon" />
                                    </Col>
                                    <Col className="item">
                                        <Image src={iconIroning} className="icon" />
                                    </Col>
                                    <Col className="item">
                                        <Image src={iconEco} className="icon" />
                                    </Col>
                                </Row>
                                <h5>Choose pick up or delivery</h5>
                                <Row>
                                    <Col className="item">
                                        <Image src={iconSchedule} className="icon" />
                                    </Col>
                                    <Col className="item">
                                        <Image src={iconDelivery} className="icon" />
                                    </Col>
                                </Row>
                                <h5>Connect with Washers you can trust!</h5>
                                <Row>
                                    <Col>
                                        <Image src="https://d2zp5xs5cp8zlg.cloudfront.net/image-18279-800.jpg" className="unitImage"></Image>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col><Image src={iconDialog} className="icon"></Image></Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Image src={iconHeart} className="icon heart"></Image>
                                                <Image src={iconLike} className="icon like"></Image>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="button-container">
                    <Col>
                        <a onClick={props.onClickWasher} className="btn btn-outline btn-xl">Sign up as Washer</a>
                    </Col>
                    <Col>
                        <a onClick={props.onClickWashee} className="btn btn-outline btn-xl">Sign up as Washee</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section;