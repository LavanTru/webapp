import React from 'react';
import { Container, Row, Col, Image, ListGroup} from 'react-bootstrap';


function ServiecItem(props){

    return (
        <div className="item">
            <Image src={props.source} className="icon"></Image>
            <h3>{props.title}</h3>
            <p className="text-muted">{props.desc}</p>
        </div>
    );

}

export default ServiecItem;