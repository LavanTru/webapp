import React from 'react';
import TemperatureIcon from './TemperatureIcon';

function TemperatureIcons(props){
    switch (props.temperature){
        case 30:
            return(
                <>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#b8627d" 
                        temp="90"
                        >
                    </TemperatureIcon>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#b8627d" 
                        temp="60">
                    </TemperatureIcon>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#0f7d80" 
                        temp={props.temperature}>
                    </TemperatureIcon>
                </>
            );
        case 60:
            return(
                <>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#b8627d" 
                        temp="90">
                    </TemperatureIcon>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#0f7d80"
                        temp={props.temperature}>    
                    </TemperatureIcon>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#b8627d" 
                        temp="30">
                    </TemperatureIcon>
                </>
            );
        case 90:
            return(
                <>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#0f7d80"
                        temp={props.temperature}>
                    </TemperatureIcon>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#b8627d" 
                        temp="60">
                    </TemperatureIcon>
                    <TemperatureIcon 
                        className="wash-icon"
                        fill="#b8627d" 
                        temp="30">
                    </TemperatureIcon>
                </>
            );
    }

}

export default TemperatureIcons