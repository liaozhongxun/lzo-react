const { CHANGE_NAME,CHANGE_BANNERS } = require("./constants");

// 这些action函数都是同步的，不能在这里面执行异步操作
// dispatch(changeNameAction()) 派发的是返回的对象，默认也只能派发 对象 
// 如果需要在这里做异步操作，可以在 createStore 使用中间件 redux-thunk 派发函数实现
const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    name
})

const changBannersAction = (list) =>({
    type: CHANGE_BANNERS,
    list
})

const fetchDataAction = () => { 
    function getdata(dispatch,getState){
        console.log(getState().name)
        setTimeout(()=>{
            dispatch(changBannersAction([{title:"updata success"}]))
        },2000)
    }

    // 返回值是一个函数，redux不支持，需要使用中间件  redux-thunk （作用只是将函数执行）,最终派发的还是对象
    return getdata

}


module.exports = {
    changeNameAction,
    fetchDataAction
}