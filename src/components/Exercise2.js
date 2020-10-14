import React, { Component } from 'react';

class Exercise2 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            fruit: ""
        }
    }

    handleChange = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        }, function () {
            if (name === "fruit" && this.state.name) {
                alert(`${this.state.name} is pick ${this.state.fruit}`)
            }
        })
    }
    render() {
        return (
            <div>
                <input id="name-input" name="name" value={this.state.name} onChange={this.handleChange} />
                <select id="select-input" value={this.state.fruit} name="fruit" onChange={this.handleChange}>
                    <option value="apple" >Apple</option>
                    <option value="orange">Orange</option>
                    <option value="qiui">Qiui</option>
                </select>
            </div>
        );
    }
}

export default Exercise2;