import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./CSSTransition.css"

export class app extends PureComponent {
    constructor() {
        super()
        this.state = {
            showTitle: true
        }
    }
    chanTitleType() {
        this.setState({
            showTitle: !this.state.showTitle
        })
    }
    render() {
        const { showTitle } = this.state;
        return (
            <div>
                <button onClick={e => this.chanTitleType()}>切换</button>
                {/* <h2 style={{ display: showTitle ? "block" : "none" }}>标题动画</h2> */}
                {/* {showTitle ? <h2>标题动画</h2> : ""} */}
                {/* 通过动画库 入场条件，动画类 timeout必须绝对类的添加移除事件  unmountOnExit退出是卸载 appear属性配合.xxxx-appear第一次展示的动画*/}
                <CSSTransition
                    in={showTitle}    
                    classNames='lzo'
                    timeout={1000}
                    unmountOnExit={true}
                    appear
                    
                    onEnter={e => console.log("开始进入动画")}
                    onEntering={e => console.log("进入动画过程中")}
                    onEntered={e => console.log("已进入")}

                    onExit={e => console.log("开始离开动画")}
                    onExiting={e => console.log("离开动画过程中")}
                    onExited={e => console.log("已离开")}
                >
                    <h2>标题动画</h2>
                </CSSTransition>
            </div>
        )
    }
}

export default app