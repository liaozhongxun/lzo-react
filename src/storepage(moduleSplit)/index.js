import React, { PureComponent } from 'react'

import Home from "./Home"
import About from "./About"

export class index extends PureComponent {
    render() {
        return (
            <div>
                <div>======redux数据=======</div>
                <Home></Home>
                <About></About>
            </div>
        )
    }
}

export default index