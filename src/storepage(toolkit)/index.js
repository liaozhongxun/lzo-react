import React, { PureComponent } from 'react'

import Home from "./Home"
import About from "./About"
import HomeHookConnent from './HomeHookConnent'

export class index extends PureComponent {
    render() {
        return (
            <div>
                <div>======redux数据=======</div>
                {/* <Home></Home> */}
                <About></About>
                <div>======使用 hook=======</div>
                <HomeHookConnent></HomeHookConnent>
            </div>
        )
    }
}

export default index