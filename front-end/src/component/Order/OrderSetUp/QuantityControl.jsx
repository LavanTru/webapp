import React, { Component } from "react";
import "../../../style/QuantityControl.css";

// Class to handle the changes of quantities in OrderComponent
class QuantityControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
          }
    }

    decrease = () => {
        if(this.state.value <= 0){  
            this.setState({value: 0}, () => console.log(this.state))
            return
        }else{
            this.setState({value: this.state.value - 1}, () => console.log(this.state))
            console.log("decrease", this.state.value)
            this.sendData();
        }
    }

    increase = () => {
        this.setState({value: parseInt(this.state.value, 10) + 1}, () => console.log(this.state))
        // this.setState({ value: parseInt(this.state.value, 10) + 1 });
        console.log("increase", this.state.value)
        this.sendData();
    }

    // for some reason the call back sends an wrong value to the parent component. Need to revisit and fix this
    sendData = () => {
        this.props.parentCallback(this.state.value);
        console.log("child", this.state.value)
    }

    handleChange(value){
        this.setState({value: value})
        this.sendData();
    }

    render() {
        return (
            <div className="def-number-input number-input">
            <button onClick={this.decrease} className="minus"></button>
                <input 
                    id = {this.props.name}
                    className="quantity" 
                    name="quantity" 
                    value={this.state.value}
                    onChange={() => this.handleChange(document.getElementById(this.props.name).value)}
                    type="number"
                    />
            <button onClick={this.increase} className="plus"></button>
            </div> 
        );
    }
}

export default QuantityControl;