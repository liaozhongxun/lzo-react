import React, { memo, useEffect, useState } from 'react'

const SetTitleHook = memo(() => {
    const [counter, setCounter] = useState(0);

    // document.title = counter; //可以改变标题 这个功能与渲染组件无关，产生一个副作用，所有这样用并不好
    // useEffect 主要是为了处理 以前生命周期的很多逻辑
    useEffect(() => {
        // 当前回调函数绘制组件被渲染完成后，自动执行 （网络请求、DOM操作、事件监听）
        document.title = counter;

        // 返回值，需要返回一个回调函数 ==> 组件被重新渲染，或者组件被卸载的时候执行
        return () => { 
            // 清除机制，做一些取消定时器，销毁的操作
        }
    });

    return (
        <div>
            <div>connt:{counter}</div>
            <button onClick={e => setCounter(counter + 1)}>+1</button>
        </div>
    )
})

export default SetTitleHook