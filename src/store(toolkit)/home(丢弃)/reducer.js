import * as actionTypes from "./constants"

// 初始化数据
const initialState = {
    homename: 'homename tookit',
}

// 定义reducer纯函数, action 是dispatch的数据
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_HOMENAME:
            return { ...state, homename: action.homename }
        default:
            return state
    }
}

export default reducer