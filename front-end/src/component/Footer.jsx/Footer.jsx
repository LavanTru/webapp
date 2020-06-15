import React from 'react';
import { Container } from 'react-bootstrap';

function Footer(){
    return (
    <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Container className="text-center">
        <p className="pt-4">&copy; LavanTru 2020. All Rights Reserved.</p>
        <ul className="list-inline">
            <li className="list-inline-item">
            <a href="">Contact us</a>
            </li>
            <li className="list-inline-item">
            <a href="">About us</a>
            </li>
            <li className="list-inline-item">
            <a href="">Privacy</a>
            </li>
            <li className="list-inline-item">
            <a href="https://www.facebook.com/LavanTru" target="_blank" className="fa fa-facebook"></a>
            </li>
            <li className="list-inline-item">
            <a href="" className="fa fa-twitter"></a>
            </li>
            <li className="list-inline-item">
            <a href="" className="fa fa-instagram"></a>
            </li>
        </ul>
        </Container>
    </footer>
    );
}

export default Footer