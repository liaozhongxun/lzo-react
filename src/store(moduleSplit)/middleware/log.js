// 中间件原理，对每次派发的action进行拦截，打印日志案例
export default function log(store){
    // 保存我们 拦截操作前的 dispatch
    const next = store.dispatch;

    function logAndDispatch(action){
        console.log('派发前：',action);
        
        // 操作完进行它原本的派发操作
        next(action);

        console.log('派发后：',store.getState());
    }

    // Monkey Patching：猴补丁 => 篡改现有代码，对整体逻辑进行修改
    // 任何地方执行dispatch 其实是执行 logAndDispatch
    store.dispatch = logAndDispatch;
}