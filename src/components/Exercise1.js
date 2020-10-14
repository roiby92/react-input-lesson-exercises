import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    handleChange = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }
    alertMes = () => {
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }
    render() {
        return (
            <div>
                <input id="name-input1" placeholder="name" name="name" onChange={this.handleChange} />
                <input id="age-input" placeholder="age" name="age" onChange={this.handleChange}/>
                <button onClick={this.alertMes}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;