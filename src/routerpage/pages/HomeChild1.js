import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'


export class HomeChild1 extends PureComponent {
    render() {
        const { router } = this.props;
        return (
            <div>HomeChild1 得到动态路由参数 {router.params.id}</div>
        )
    }
}

export default withRouter(HomeChild1)