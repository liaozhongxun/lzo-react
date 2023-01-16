import React, { PureComponent } from 'react'

export class CountClass extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    add() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    reduce() {
        this.setState({
            counter: this.state.counter -1 
        })
    }

    render() {
        return (
            <div>
                counterVal: {this.state.counter}
                <button onClick={e => this.add()}>+1</button>
                <button onClick={e => this.reduce()}>-1</button>
            </div>
        )
    }
}

export default CountClass