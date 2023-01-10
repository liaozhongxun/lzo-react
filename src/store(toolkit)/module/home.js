import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 操作异步数据
export const fetchDataAction = createAsyncThunk("home/getasyncdata", async (payload,store) => {
    /**
     * 存在三种状态
     *      pending：action被发出，但是还没有最终的结果
     *      fulfilled：获取到最终的结果
     *      rejected：发送错误或抛出异常
     *      createSlice 的 extraReducers 中 监听
     */

    // extraReducers 方式 更新数据（官方推荐）
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ title: 'createAsyncThunk update data' }])
        }, 2000);
    })

    // 不使用 extraReducers 需要注释掉,直接 dispatch reducers 实现数据更新，
    // const { dispatch } = store;
    
    // let data = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([{ title: 'createAsyncThunk update data' }])
    //     }, 2000);
    // })
    // dispatch(changeBannersAction(data));
})

const homeSlice = createSlice({
    name: "home", // 命名空间, action类型就是 home/<action-name>
    initialState: { // 初始化数据
        homename: 'homename tookit2',
        banners: [{ title: 'default banners title' }]
    },
    reducers: { // 以前的reducers函数 
        changeHomeNameAction(state, action) { // 相当于以前的case语句
            console.log(action.payload) // dispatch传递的参数,需需要自己起名字homename，直接固定payload
            state.homename = action.payload;
        },
        changeBannersAction(state, { payload }) {
            // 由于type不需要用到，所以可以直接拿payload
            state.banners = payload;
        }
    },
    extraReducers: { // 用于监听 trunk 异步actions 的 状态
        [fetchDataAction.pending](state, action) {
            console.log("fetchDataAction pending")
        },
        [fetchDataAction.fulfilled](state, action) {
            // 没有发生异常
            console.log("fetchDataAction fulfilled");
            console.log(action)
            state.banners = action.payload;
        },
        [fetchDataAction.pending](state, action) {
            // 发生异常
            console.log("fetchDataAction pending")
        }
    }
})

export const { changeHomeNameAction, changeBannersAction } = homeSlice.actions; // 统一导出所有actions
export default homeSlice.reducer;