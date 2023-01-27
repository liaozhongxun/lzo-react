import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux" // 将react和redux结合在一起
import { HashRouter } from 'react-router-dom'; //router1、 使用配置 HashRouter ，6.x
import { UserContext, ThemeContext } from "./hookspage/3.useContext-demo/context"
import "normalize.css";

// 组件
// import App from './components/App';
// import App from './components-hoc/App';

// jsx
// import App from './jsx/App';

// 动画
// import App from './animate/CSSTransition';

// 样式
// import App from './cssmodule';

// router 路由配置
import App from './routerpage'
// import App from './routerpage/index(未提取路由到配置文件)'

// hooks 使用
// import App from './hookspage/App'
// hook useContext


// redux 默认使用
// import App from './storepage(default)'
// import store from './store(default)'

// redux 模块拆分
// import App from './storepage(moduleSplit)'
// import store from './store(moduleSplit)'

// redux toolkit 的使用
// import App from './storepage(toolkit)'
import store from './store(toolkit)'


// 案例
// 大屏案例
// import App from './case/LargeScreen/LargeScreen'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Suspense fallback={<h3>Loading...</h3>}>
            {/*注入 context*/}
            <UserContext.Provider value={{ name: "UserContextName", level: 99 }}>
                <ThemeContext.Provider value={{ color: "red", size: 30 }}>
                    <Provider store={store}>  {/*react-redux 1、 给整个应用提供store，组件中就不用导入了*/}
                        <App value={'1234'}/>
                    </Provider>
                </ThemeContext.Provider>
            </UserContext.Provider>
        </Suspense>
    </HashRouter>
);

