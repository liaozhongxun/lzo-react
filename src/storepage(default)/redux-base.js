import React, { PureComponent } from 'react'
import store from "../store(default)";
import { changeNameAction } from "../store(default)/actionCreators"

// 这里不使用react-redux也能生效

export class index extends PureComponent {
    constructor() { 
        super()

        this.state = {
            name: store.getState().name
        }

    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({ name: state.name })
        })
    }

    view_change_name(name){
        console.log(name)
        store.dispatch(changeNameAction(name))
    }

    render() {
        return (
            <div>
                <div>name: {this.state.name}</div>
                <button onClick={ e => this.view_change_name('123')}>改变</button>
            </div>
        )
    }
}

export default index