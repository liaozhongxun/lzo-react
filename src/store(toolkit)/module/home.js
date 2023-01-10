import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home", // 命名空间, action类型就是 home/<action-name>
    initialState: { // 初始化数据
        homename: 'homename tookit2',
    },
    reducers: { // 以前的reducers函数 
        changeHomeNameAction(state, action) { // 相当于以前的case语句
            console.log(action.payload) // dispatch传递的参数,需需要自己起名字homename，直接固定payload
            state.homename = action.payload;
         }
    }
})

export const { changeHomeNameAction } = homeSlice.actions; // 统一导出所有actions
export default homeSlice.reducer;