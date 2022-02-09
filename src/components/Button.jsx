import React, { Component } from 'react';

class Button extends Component {
    state = {}
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>Pick Student</button>
            </div>
        );
    }
}

export default Button;