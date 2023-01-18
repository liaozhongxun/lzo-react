import React, { memo, useMemo, useState } from "react";

// 总结 
//  1、useMemo 优化的是, 每次渲染组件时，useMemo依赖不发生改变，不会重新执行函数，得到返回值，它记忆了上一次的值
//  2、当个子组件传递对象参数时，每次渲染组件，子组件也会被从下渲染，用 useMemo 优化返回的对象,就不会

const HelloWorld = memo(function (props) {
    console.log("HelloWorld被渲染~");
    return <h2>Hello World</h2>;
});

function calcNumTotal(num) {
    // console.log("calcNumTotal的计算过程被调用~")
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

const UseMemoHook = memo(() => {
    const [count, setCount] = useState(0);

    // const result = calcNumTotal(50)

    // 1.不依赖任何的值, 进行计算, 对calcNumTotal的返回结果进行优化，不会每次渲染组件，都有计算一遍，除非依赖发生改变
    const result = useMemo(() => {
        return calcNumTotal(50);
    }, []);

    // 2.依赖count
    // const result = useMemo(() => {
    //   return calcNumTotal(count*2)
    // }, [count])

    // 3.useMemo和useCallback的对比
    // function fn() {}
    // const increment = useCallback(fn, [])
    // const increment2 = useMemo(() => fn, [])

    // 4.使用useMemo对子组件渲染进行优化
    // const info = { name: "why", age: 18 }
    const info = { name: "why", age: 18 }

    return (
        <div>
            <h2>计算结果: {result}</h2>
            <h2>计数器: {count}</h2>
            <button onClick={(e) => setCount(count + 1)}>+1</button>

            <HelloWorld result={result} info={info} />
        </div>
    );
});

export default UseMemoHook;
