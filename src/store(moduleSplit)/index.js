import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { log, myThunk, myApplyMiddleware } from "./middleware"

import aboutReducer from "./about"
import homeReducer from "./home";

// 将多个 reducer 合并
const reducer = combineReducers({
    about: aboutReducer,
    home: homeReducer
})

// combineReducers 实现原理
// const reducer = (state = {}, action) => ({
//     about: aboutReducer(state.about, action),
//     home: homeReducer(state.home, action),
// })

// redux-devtools , 生产环境把  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) 干掉就看不到了
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 创建 store
// const store = createStore(reducer);
// const store = createStore(reducer,applyMiddleware(thunk)); // 通过 applyMiddleware 应用中间件 增强redux，可以很多
const store = createStore(reducer, composeEnhancers(applyMiddleware())); // 使用 redux-devtools



// 自己实现中间件 实现log,thunk 
// log(store)
myApplyMiddleware(store, myThunk, log)


export default store;