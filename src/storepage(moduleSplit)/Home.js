import React, { PureComponent } from 'react'
import { changeHomeNameAction } from "../store(moduleSplit)/home/actionCreators"
import { connect } from "react-redux";  // react-redux 2、 引入 connect 

export class index extends PureComponent {
    view_change_name(name) {
        this.props.changeName(name);
    }

    render() {
        const { homename } = this.props;
        return (
            <div>
                <div>homename: {homename}</div>
                <button onClick={e => this.view_change_name('123')}>改变</button>
            </div>
        )
    }
}

// connect() 返回值是一个高阶函数
// 设置需要映射的状态，组件中通过props获取
const mapStateToProps = (state) => ({
    homename: state.home.homename,
})
// 映射action 到 props
const mapDispatchToProps = (dispatch) => ({
    changeName(name) {
        dispatch(changeHomeNameAction(name));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index);  // react-redux 3、 使用高阶函数 connect