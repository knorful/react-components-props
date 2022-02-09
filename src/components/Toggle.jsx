import React, { Component } from 'react';

class Toggle extends Component {
    state = {}

    render() {
        return (
            <>
            <p>toggle to show image:</p>
            <label className="switch">
                <input type="checkbox" onClick={this.props.handleClick} />
                <span className="slider round"></span>
            </label>
            </>
        );
    }
}

export default Toggle;