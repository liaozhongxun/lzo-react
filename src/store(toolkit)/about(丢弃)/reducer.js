import * as actionTypes from "./constants"

// 初始化数据
const initialState = {
    aboutname: 'aboutname toolkit',
}

// 定义reducer纯函数, action 是dispatch的数据
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ABOUTNAME:
            console.log(action)
            return { ...state, aboutname: action.aboutname }
        default:
            return state
    }
}

export default reducer