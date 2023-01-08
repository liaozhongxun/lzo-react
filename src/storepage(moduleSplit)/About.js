import React, { PureComponent } from 'react'
import { changeAboutNameAction } from "../store(moduleSplit)/about/actionCreators"
import { connect } from "react-redux";  // react-redux 2、 引入 connect 

export class index extends PureComponent {
    view_change_name(name) {
        this.props.changeName(name);
    }

    render() {
        const { aboutname } = this.props;
        return (
            <div>
                <div>aboutname: {aboutname}</div>
                <button onClick={e => this.view_change_name('456')}>改变</button>
            </div>
        )
    }
}

// connect() 返回值是一个高阶函数
// 设置需要映射的状态，组件中通过props获取
const mapStateToProps = (state) => ({
    aboutname: state.about.aboutname,
})
// 映射action 到 props
const mapDispatchToProps = (dispatch) => ({
    changeName(name) {
        dispatch(changeAboutNameAction(name));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index);  // react-redux 3、 使用高阶函数 connect