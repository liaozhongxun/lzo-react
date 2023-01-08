const { CHANGE_NAME, CHANGE_BANNERS } = require("./constants");

// 初始化数据
const initialState = {
    name: 'lzo',
    age: 18,
    banners: [{ title: 'default' }]
}

// 定义reducer纯函数, action 是dispatch的数据
function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name }

        case CHANGE_BANNERS:
            return { ...state, banners: action.list }
        default:
            return state
    }
}

module.exports = reducer