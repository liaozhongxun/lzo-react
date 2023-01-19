import React, { PureComponent } from 'react'

import CreatePortal from './createPortal'
import setTitle from './my-hoc/setTitle'

export class App extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <>
                <div>App - {title}</div>
                <CreatePortal></CreatePortal>
            </>
        )
    }
}

export default setTitle(App)