import React, { Component } from "react";
import "../style/QuantityControl.css";

class QuantityControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
          }
    }

    decrease = () => {
        this.setState({ value: this.state.value - 1 });
        console.log("decrease", this.state.value)
        this.sendData();
    }

    increase = () => {
        this.setState({ value: parseInt(this.state.value, 10) + 1 });
        console.log("increase", this.state.value)
        this.sendData();
    }

    // for some reason the call back sends an wrong value to the parent component. Need to revisit and fix this
    sendData = (quantity) => {
        this.props.parentCallback(this.state.value);
        console.log("child", this.state.value)
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
                    onChange={() => this.setState({value: document.getElementById(this.props.name).value})}
                    type="number"
                    />
            <button onClick={this.increase} className="plus"></button>
            </div> 
        );
    }
}

export default QuantityControl;