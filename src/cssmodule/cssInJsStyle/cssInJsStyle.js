import React, { PureComponent } from 'react'
import { AppWrapper } from "./style"

export class cssInJsStyle extends PureComponent {
    constructor(){
        super();
        this.state = {
            size:20
        }
    }
    render() {
        return (
            // AppWrapper 包裹中的元素可以在里面直接设置样式
            <AppWrapper size={this.state.size}>
                <div className='cssInJsClass'>cssInJsStyle</div>
                <div className='other'>任意元素</div>
            </AppWrapper>
        )
    }
}

export default cssInJsStyle