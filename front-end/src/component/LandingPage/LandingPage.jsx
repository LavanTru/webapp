import React, { useState } from 'react';
import ModalContainer from '../Modal/ModalContainer';
import Header from './Header';
import Section from './Section';
import "../../style/LandingPage.css";

// LandingPage consists of Header, Section and ModalContainer for login/registration modal
function LandingPage(){
    const [show, setShow] = useState(false);
    const [isRegistered, setRegisteredFlag] = useState(false);
    const [registerUserType, setRegisterUserType] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeRegisterFlag = () => setRegisteredFlag(!isRegistered);

    return (
        <div className="landingPage">
            <Header />
            <Section 
            onClickWasher={() => { handleShow(); setRegisterUserType("WASHER") }} 
            onClickWashee={() => { handleShow(); setRegisterUserType("WASHEE") }}/>
            <ModalContainer
                        show={show}
                        onHide={handleClose}
                        isRegistered={isRegistered}
                        handleChangeIsRegistered={changeRegisterFlag}
                        registerUserType={registerUserType} />
        </div>
    );
}

export default LandingPage;