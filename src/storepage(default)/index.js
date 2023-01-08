import React, { PureComponent } from 'react'

import ReducerModule from "./redux-base"
import ReactRedux from "./react-redux"

export class index extends PureComponent {
    render() {
        return (
            <div>
                <div>======redux数据=======</div>
                <ReducerModule></ReducerModule>
                <ReactRedux></ReactRedux>
            </div>
        )
    }
}

export default index