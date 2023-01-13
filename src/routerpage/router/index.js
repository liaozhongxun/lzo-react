import {  Navigate } from 'react-router-dom'
import Home from '../pages/Home'
// import About from '../pages/About'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import HomeChild1 from '../pages/HomeChild1'
import HomeChild2 from '../pages/HomeChild2'
import React from 'react'

// react 的 分包方法
// 入口必须 <Suspense fallback={<h3>Loading...</h3>}></Suspense> 包裹 <App /> 才生效
const About = React.lazy(() => import("../pages/About"))

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home></Home>,
        children:[
            {
                path: "/home",
                element: <Navigate to="/home/c1/456" />
            },
            {
                path: "/home/c1/:id",
                element: <HomeChild1 />
            },
            {
                path: "/home/c2",
                element: <HomeChild2 />
            },
        ]
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
]

export default routes