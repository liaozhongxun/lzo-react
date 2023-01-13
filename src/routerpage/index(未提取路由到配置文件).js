import React, { PureComponent } from 'react'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeChild1 from './pages/HomeChild1'
import HomeChild2 from './pages/HomeChild2'

export class index extends PureComponent {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                <div> 
                    <div>header</div>
                    <div className='nav'>
                        {/* 1、不重要 */}
                        <Link to="/home">首页</Link>
                        <Link to="/about">关于</Link>
                        <Link to="/login">登陆</Link>

                        {/* 2、不重要  激活自动添加 active 类,动态加style 和 className */}
                        <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "#f00" : "" })}>首页</NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "#f00" : "" })}>关于</NavLink>
                        <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? "#f00" : "" })}>登陆</NavLink>

                        {/* 3、Navigator 一出现，就会立刻跳转对应路径(配合逻辑判断使用) */}
                        {/* <div>{isToLogin ? <Navigate to="/Login" /> : "暂不跳转"}</div> */}

                        {/* 4、自己或通过js实现跳转 6.x版本类组件无法使用 hook useNavigate ,需要通过高阶组件*/} 
                    </div>
                    <hr />
                </div>
                <div className='content'>
                    {/* router2、映射关系表：path => Component */}

                    <Routes>
                        <Route path='/' element={<Navigate to="/home" />}></Route>  {/* 5.x  用 component 代替 element，还需要用属性 exact 精准匹配 */}
                        <Route path='/home' element={<Home></Home>}>
                            <Route path='/home' element={<Navigate to="/home/c1/456" />}></Route>
                            <Route path='/home/c1/:id' element={<HomeChild1></HomeChild1>}></Route> {/*动态路由传参*/}
                            <Route path='/home/c2' element={<HomeChild2></HomeChild2>}></Route> {/*用于query传参*/}
                        </Route>
                        <Route path='/about' element={<About></About>}></Route> 
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='*' element={<NotFound></NotFound>}></Route>
                    </Routes>

                </div>
                <div>footer</div>
            </div>
        )
    }
}

export default index