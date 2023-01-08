import React, { PureComponent } from 'react'
import store from "./store"

export class index extends PureComponent {
    constructor() {
        super()

        this.state = {
            name: store.getState().name
        }

    }

    // componentDidMount() {
    //     store.subscribe(() => {
    //         const state = store.getState().counter
    //         this.setState({ counter: state.counter })
    //     })
    // }

    render() {
        return (
            <div>name: {this.state.name}</div>
        )
    }
}

export default index