import * as actionTypes from "./constants"

// 初始化数据
const initialState = {
    homename: 'homename',
    banners:[{title:'home default banners'}]
}

// 定义reducer纯函数, action 是dispatch的数据
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_HOMENAME:
            return { ...state, homename: action.homename }
        case actionTypes.CHANGE_BANNERS:
            return { ...state, banners: action.banners }
        default:
            return state
    }
}

export default reducer