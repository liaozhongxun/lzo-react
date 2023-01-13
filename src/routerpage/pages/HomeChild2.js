import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeChild2 extends PureComponent {
  render() {
    const { router } = this.props;
    return (
      <div>HomeChild2 得到query参数a的值 {router.query.a}</div>
    )
  }
}

export default withRouter(HomeChild2)