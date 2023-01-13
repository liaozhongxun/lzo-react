import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux" // 将react和redux结合在一起
import { HashRouter } from 'react-router-dom'; //router1、 使用配置 HashRouter ，6.x

// import App from './App';
// import App from './animate/CSSTransition';
// import App from './cssmodule/cssmodule';

// router 路由配置
// import App from './routerpage'
import App from './routerpage/index(未提取路由到配置文件)'

// redux 默认使用
// import App from './storepage(default)'
// import store from './store(default)'

// redux 模块拆分
// import App from './storepage(moduleSplit)'
import store from './store(moduleSplit)'

// redux toolkit 的使用
// import App from './storepage(toolkit)'
// import store from './store(toolkit)'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Suspense fallback={<h3>Loading...</h3>}>
            <Provider store={store}>  {/*react-redux 1、 给整个应用提供store，组件中就不用导入了*/}
                <App />
            </Provider>
        </Suspense>
    </HashRouter>
);

