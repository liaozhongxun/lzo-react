import React, { useState } from 'react'

/**
 *  useState
 *      参数：只有一个参数，初始化值，不设置位undefined，第一次创建状态，值为0，第二次，就是去state内部获取使用
 *      返回值：数组，包含两个元素 [状态单前值，设置值的函数]
 *   
 *  点击button后做两件事情，通过 setCounter 重新设置值，同时将新的值返回过来，渲染到页面上
 */

function CountHook() {
    const [counter, setCounter] = useState(0); // 首次 counter 变量 默认为0
    // 函数执行完成之后 conter 变量就会消失，被销毁，state状态会被react保留，再进来时重新定义
    return (
        <div>
            <div>
                counterVal: {counter}
                <button onClick={e => setCounter(counter + 1)}>+1</button>
                <button onClick={e => setCounter(counter - 1)}>-1</button>
            </div>
        </div>
    )
}

export default CountHook