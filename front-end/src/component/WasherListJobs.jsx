import React, { Component } from 'react';
import {Col} from "react-bootstrap";


const WasherListJobs = (props) => { 
        
        const washerJob = props.washerJob;

        if(washerJob.active){
            return (<Col className="unitLaundryJobs">{washerJob.job}</Col>);
        }
        else{
            return null;
        }
    
}
export default WasherListJobs