import React, { Component } from 'react'

export class BrotherOne extends Component {
    constructor() {
        super()
        this.state = {
            name: "default"
        }
    }

    changeInput(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <input value={this.state.name} onChange={e => this.changeInput(e)} />
        )
    }
}

export default BrotherOne