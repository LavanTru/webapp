import React from 'react';
import {Image} from 'react-bootstrap';


function ServiceItem(props){

    return (
        <div className="item">
            <Image src={props.source} className="icon"></Image>
            <h3>{props.title}</h3>
            <p className="text-muted">{props.desc}</p>
        </div>
    );

}

export default ServiceItem;