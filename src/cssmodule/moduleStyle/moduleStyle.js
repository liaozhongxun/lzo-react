import React, { PureComponent } from 'react'
import style from "./style.module.css"


export class moduleStyle extends PureComponent {
  render() {
    return (
      <div className={style.moduleTitle} >moduleStyle</div>
    )
  }
}

export default moduleStyle