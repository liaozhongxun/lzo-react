export default function thunk(store) {
    const next = store.dispatch;

    function thunkDispatch(action) {
        if (typeof action == 'function') { // 如果dispatch的是一个函数，那么就执行，传入dispatch，等结果出来，再dispatch到reducers，更新state
            action(store.dispatch, store.getState)
        } else {
            next(action);
        }
    }

    store.dispatch = thunkDispatch;
}