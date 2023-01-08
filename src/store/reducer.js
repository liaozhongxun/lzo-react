const { CHANGE_NAME } = require("./constants");

// 初始化数据
const initialState = {
    name: 'lzo',
    age: 18
}

// 定义reducer纯函数
function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name }
        default:
            return state
    }
}

module.exports = reducer