import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { withRouter } from '../hoc'
export class Home extends PureComponent {
    navigateTo(path) {
        let { navigate } = this.props.router; // useNavigate 类组件不能用，通过高阶函数返回函数组件，传递过来
        navigate(path);
    }

    render() {
        return (
            <div>
                <div className='home-header'>
                    <Link to="/home/c1">子路由1</Link>
                    <Link to="/home/c2">子路由2</Link>
                    <button onClick={e => this.navigateTo("/about")}>js跳转</button>
                </div>
                <div className='home-centert'>
                    {/* 占位组件 类似vue的 router-view */}
                    <Outlet></Outlet>
                </div>
            </div>
        )
    }
}


export default withRouter(Home)