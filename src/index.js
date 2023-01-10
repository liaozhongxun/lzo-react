import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux" // 将react和redux结合在一起

// import App from './App';
// import App from './animate/CSSTransition';
// import App from './cssmodule/cssmodule';

// redux 默认使用
// import App from './storepage(default)'
// import store from './store(default)'

// redux 模块拆分
// import App from './storepage(moduleSplit)'
// import store from './store(moduleSplit)'

// redux toolkit 的使用
import App from './storepage(toolkit)'
import store from './store(toolkit)'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>  {/*react-redux 1、 给整个应用提供store，组件中就不用导入了*/}
        <App />
    </Provider>
);

