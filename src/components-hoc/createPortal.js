import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class CreatePortal extends PureComponent {
  render() {
    return (
        createPortal(<div>createPortal</div>,document.querySelector("#lzo"))
    )
  }
}

export default CreatePortal