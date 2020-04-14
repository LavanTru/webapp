import React, { Component } from 'react';

const washer = (props) => {
    return( <li>
        <span>name: {props.children}, adresses= {props.name}</span>
    </li>)
}

export default washer;