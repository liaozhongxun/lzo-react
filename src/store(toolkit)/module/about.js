import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "about", // 命名空间
    initialState: { // 初始化数据
        aboutname: 'aboutname tookit2',
    },
    reducers: { // 以前的reducers函数 
        changeAboutNameAction(state,action){ // 相当于以前的case语句
            state.aboutname = action.payload;
        }
    }
})

export const { changeAboutNameAction } = aboutSlice.actions;
export default aboutSlice.reducer;