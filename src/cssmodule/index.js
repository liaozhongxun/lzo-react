import React, { PureComponent } from 'react'
import InlineStyle from './inlineStyle/InlineStyle'
import BasicsStyle from './basicsStyle/basicsStyle'
import ModuleStyle from './moduleStyle/moduleStyle'
import CssInJsStyle from './cssInJsStyle/cssInJsStyle'

export class app extends PureComponent {
  render() {
    return (
      <div>
        <div>行内样式</div>
        <InlineStyle></InlineStyle>
        <div><hr />普通css样式表/scss样式表(所有组件生效)(scss 需要安装 sass 包) </div>
        <BasicsStyle></BasicsStyle>
        <div><hr />css module </div>
        <ModuleStyle></ModuleStyle>
        <div><hr />css in js (需要安装 styled-components)</div>
        <CssInJsStyle></CssInJsStyle>
      </div>
    )
  }
}

export default app