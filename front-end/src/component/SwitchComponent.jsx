import React from 'react';
import Switch from "react-switch";

function SwitchComponent(props){
    return(
        <label className="switch">
            <Switch
            id={props.id}
            onChange={props.onChange}
            checked={props.checked}
            className="react-switch"
            onColor="#ffe6de"
            onHandleColor="#b8627d"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            />                      
        </label>
    );
}

export default SwitchComponent;