const { createStore } = require("redux")

// 初始化数据
const initialState = {

}

// 定义reducer纯函数
function reducer(){
    return initialState
}

// 创建 store
const store = createStore(reducer);

module.exports = store;