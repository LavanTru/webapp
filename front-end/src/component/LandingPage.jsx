import React from 'react';
import Header from './Header';
import Section from './Section';
import "../style/LandingPage.css";

function LandingPage(){

    return (
        <div className="landingPage">
            <Header />
            <Section />
        </div>
    );
}

export default LandingPage;