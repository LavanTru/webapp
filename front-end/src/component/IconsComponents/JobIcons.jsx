import React from 'react';
import LaundryIcon from './LaundryIcon';
import IroningIcon from './IroningIcon';
import DrycleanIcon from './DrycleanIcon';
import PickupDeliveryIcon from './PickupDeliveryIcon';

// This function returns the icon for a specific laundry job
function JobsIcons(props){
    switch (props.job){
        case "Laundry":
            return <LaundryIcon />
        case "Ironing":
            return <IroningIcon />
        case "Dry clean":
            return <DrycleanIcon />
        case "Pickup and delivery":
            return <PickupDeliveryIcon />
        default: 
            return(<h7>{props.job}</h7>)
    }

}

export default JobsIcons