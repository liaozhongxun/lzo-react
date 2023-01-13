import React from 'react'
import { Link, NavLink, useRoutes } from 'react-router-dom'
import routes from "./router"

export function Index() {
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

                {useRoutes(routes)}

            </div>
            <div>footer</div>
        </div>
    )
}

export default Index