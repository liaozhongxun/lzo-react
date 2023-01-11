import React, { PureComponent } from 'react'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import NotFound from './pages/NotFound'

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
                        {/* 不重要 */}
                        <Link to="/home">首页</Link>
                        <Link to="/about">关于</Link>

                        {/* 不重要  激活自动添加 active 类,动态加style 和 className */}
                        <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "#f00" : "" })}>首页</NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "#f00" : "" })}>关于</NavLink>

                        {/* Navigator 一出现，就会立刻跳转对应路径(配合逻辑判断使用) */}
                        {/* <div>{isToMenus ? <Navigate to="/menus" /> : "暂不跳转"}</div> */}
                    </div>
                    <hr />
                </div>
                <div className='content'>
                    {/* router2、映射关系表：path => Component */}

                    <Routes>
                        <Route path='/' element={<Navigate to="/home" />}></Route>  {/* 5.x  用 component 代替 element，还需要用属性 exact 精准匹配 */}
                        <Route path='/home' element={<Home></Home>}></Route>
                        <Route path='/about' element={<About></About>}></Route>
                        <Route path='/menus' element={<Menus></Menus>}></Route>
                        <Route path='*' element={<NotFound></NotFound>}></Route>
                    </Routes>

                </div>
                <div>footer</div>
            </div>
        )
    }
}

export default index