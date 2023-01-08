const { createStore, applyMiddleware,compose } = require("redux");
const { default: thunk } = require("redux-thunk");
const reducer =  require("./reducer.js")



// redux-devtools , 生产环境把  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) 干掉就看不到了
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 创建 store
// const store = createStore(reducer);
// const store = createStore(reducer,applyMiddleware(thunk)); // 通过 applyMiddleware 应用中间件 增强redux，可以很多
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk))); // 使用 redux-devtools

module.exports = store;