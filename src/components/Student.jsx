import React, { Component } from 'react';

class Student extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>{this.props.student && this.props.student.name}</p>
                {this.props.student && ( this.props.showImage && <img src={this.props.student.img} alt={this.props.student.name} />)}
            </div>
        );
    }
}

export default Student;