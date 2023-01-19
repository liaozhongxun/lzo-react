import React from "react";

// 1.定义App根组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'note',
            count: 0,
            arr: [1, 2, 3, 4],
            isReady: true,
            url: "http://114.115.212.129/static/image/Snipaste_2021-06-22_21-13-56.jpg"

        }

        this.btnClick = this.btnClick.bind(this);
    }

    btnClick() { console.log(this) }
    btn2Click = () => console.log(this);
    btn3Click() { console.log(this) };
    btn4Click(event, name, age) { console.log(event, name, age) }

    render() {
        const { message, count, arr, isReady, url } = this.state;
        const countAdd = count + 1;

        let ele = null;
        if (isReady) {
            ele = <h1>h1</h1>
        } else {
            ele = <h2>h2</h2>
        }

        return (
            <div>
                { /* 1、注释 */}
                { /* 2、插入内容变量 */}
                <h2>{message}</h2>

                { /* 3、插入表达式 没有计算属性，可以直接通过js完成*/}
                <h2>{1 + 2}</h2>
                <h2>{countAdd}</h2>

                { /* 4、调用方法 */}
                <ul>{arr.map(item => <li>{item}</li>)}</ul>
                <ul>{this.getItem}</ul>

                { /* 5、绑定属性 */}
                <img title={message} src={url} alt='x' style={{width:'100px'}}></img>
                <h2 className="box" >绑定类</h2> { /* class 是关键字，bable解析可能会产生误解 */}
                <h2 className={`box1 box2 ${countAdd === 2 ? 'box3' : 'box4'}`} >绑定类</h2>

                { /* 6、绑定样式 */}
                <h2 style={{ color: "red", fontSize: "30px" }}>呵呵呵呵</h2>

                { /* 7、绑定事件 小驼峰*/}
                <button onClick={this.btnClick}>修改文本</button>
                <button onClick={this.btn2Click}>按钮2</button>
                <button onClick={() => this.btn3Click()}>需要执行</button>
                <button onClick={(event) => this.btn4Click(event, "why", 18)}>按钮4</button>

                { /* 8、条件渲染 js怎样就怎样 */}
                <div>{ele}</div>
                <div>{isReady ? <h1>h1</h1> : <h2>h2</h2>}</div>
                <div style={{ display: isReady ? 'block' : 'none' }}>v-show </div>

                { /* 9、列表渲染 ，如果添加限制，向把arr处理一下再遍历 */}
                <div>{arr.map(item => <div className='item'>item</div>)}</div>
            </div>
        );
    }

    /* 如果复杂的逻辑 */
    getItem() {
        return this.state.arr.map(item => <li>{item}</li>)
    }
}

export default App;