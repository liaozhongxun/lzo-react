import React, { memo, useCallback, useRef, useState } from 'react'


const ChildCpn = memo((props) => {
    const { countAdd } = props;
    console.log("子组件被渲染")
    return (
        <button onClick={countAdd}>ChildCpn +1</button>
    )
})

const Callback = memo(() => {
    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState(18);

    /**
     * 有记忆的，每次渲染都会返回同一个函数
     * 
     * 没有优化 组件渲染重新定义一次函数的作用
     *    useCallback 为了解决每次渲染都会 定义一次countAdd函数的问题
     *    此时useCallback作用是永远返回同一个函数，但是里面的回调还是要每次定义,没有起到优化的作用
     * 
     * 参数二 依赖列表：没有参数二 useCallback不会起作用，如果是[]空数组，那么出现闭包陷阱，无法增加
     */
    // const countAdd = useCallback(function () {
    //     setCounter(counter + 1)
    // }, [counter])


    /**
     * 进一步 优化即使 counter 发生改变也不 重新渲染子组件
     *     通过 useRef hook, 保证每次更新的值，地址是不变的
     */

    const countRef = useRef();
    countRef.current = counter;
    const countAdd = useCallback(function () {
        setCounter(countRef.current + 1)
    }, [countRef])

    const ageAdd = () => {
        setAge(age + 1)
    }


    /**
     *  总结 如果countAdd也是一个普通函数，那么counter和age发生变化，都会生成全新的 countAdd，都会重新渲染子组件
     *      但是如果 countAdd 使用 useCallback hook
     *          当counter发生改变，countAdd也发生变化（参数二定义的依赖列表中有），子组件重新渲染是正常的，因为传入子组件的函数发生了变化
     *          当age发生改变，这时通过useCallback 拿到 countAdd 是没有变化的，子组件就不会重新渲染 
     * 
     *  优化点：优化的并不是每次渲染 Callback 组件 都会重新定义 countAdd 的问题，而是
     *      1、不涉及相应状态时，减少接收该countAdd 的子组件的渲染次数。 
     * 
     *  使用场景
     *      1、当需要将一个函数传递给子组件是，最好使用 useCallback 进行优化，将优化之后的函数传递给子组件
     */

    return (
        <div>
            <div>count:{counter}</div>
            <div>age:{age}</div>
            <button onClick={countAdd}>count+1</button>
            <button onClick={ageAdd}>age +1</button>
            <ChildCpn countAdd={countAdd}></ChildCpn>
        </div>
    )
})

export default Callback