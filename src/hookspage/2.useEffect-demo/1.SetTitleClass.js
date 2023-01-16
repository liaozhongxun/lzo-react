import React, { PureComponent } from 'react'

export class SetTitleClass extends PureComponent {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    componentDidUpdate(){
        document.title = this.state.counter;
    }

    render() {
        return (
            <div>
                <div>connt:{this.state.counter}</div>
                <button onClick={e => this.setState({ counter: this.state.counter + 1 })}>+1</button>
            </div>
        )
    }
}

export default SetTitleClass