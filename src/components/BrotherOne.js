import React, { Component } from 'react'

export class BrotherOne extends Component {
    constructor() {
        super()
        this.state = {
            name: "default",
            isChecked: true,
            selectType: 'banana'
        }
    }

    changeInput(e) {
        // this.setState({
        //     name: e.target.value
        // })
        // 或 批量写法

        if (e.target.name === 'checkbox') {
            console.log(e.target.value) // on | off
            console.log(e.target.checked) // true | false
            this.setState({
                // isChecked: !this.state.isChecked
                isChecked: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    changeSelect(e) {
        this.setState({
            selectType: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.name} name='name' onChange={e => this.changeInput(e)} />
                <label>
                    <input type='checkbox' checked={this.state.isChecked} onChange={e => this.changeInput(e)} />
                </label>
                <div>
                    <select value={this.state.selectType} onChange={e => this.changeSelect(e)}>
                        <option value='apple'>苹果</option>
                        <option value='banana'>香蕉</option>
                        <option value='origin'>橘子</option>
                    </select>
                </div>
                <input defaultValue={this.state.name} />
            </div>
        )
    }
}

export default BrotherOne