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
    }

    increase = () => {
        this.setState({ value: parseInt(this.state.value, 10) + 1 });
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
                    min="0"
                    />
            <button onClick={this.increase} className="plus"></button>
            </div>
        );
    }
}

export default QuantityControl;