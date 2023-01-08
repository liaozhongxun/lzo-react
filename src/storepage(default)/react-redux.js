import React, { PureComponent } from 'react'
import { changeNameAction, fetchDataAction } from "../store(default)/actionCreators"
import { connect } from "react-redux";  // react-redux 2、 引入 connect 

export class index extends PureComponent {
    view_change_name(name) {
        // store.dispatch(changeNameAction(name))
        this.props.changeName(456);
    }

    getData() {
        this.props.getFetchData();
    }

    render() {
        const { name, banners } = this.props;
        return (
            <div>
                <div>name: {name}</div>
                <div>{banners.map(item=> <span key={item.title}>title: {item.title}</span>)}</div>
                <button onClick={e => this.view_change_name('123')}>改变</button>
                <button onClick={e => this.getData()}>请求数据</button>
            </div>
        )
    }
}

// connect() 返回值是一个高阶函数
// 设置需要映射的状态，组件中通过props获取
const mapStateToProps = (state) => ({
    name: state.name,
    banners: state.banners

})
// 映射action 到 props
const mapDispatchToProps = (dispatch) => ({
    changeName(name) {
        dispatch(changeNameAction(name));
    },
    getFetchData() {
        dispatch(fetchDataAction()); // 派发一个函数
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index);  // react-redux 3、 使用高阶函数 connect