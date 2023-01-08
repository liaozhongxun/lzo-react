import React from 'react'
import Headers from "./components/Headers"
import BrotherOne from './components/BrotherOne';

import ReducerModule from "./reducermodule/index"

// 创建一个Context, 组件隔代传值
// const AppContext = React.createContext;
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '首页',
            list: [1, 2, 3, 4, 5],
            infos: {
                name: 'lzo',
                height: "380cm"
            },

            count: 0,
        }
    }

    changeCount(num) {
        this.setState({
            count: this.state.count + num
        })
    }


    render() {
        return (
            <div>
                {/* 父传子：向子组件传入一个title等数据 */}
                {/* 子传父：向子组件传入回调，接收子组件发送的数据 childExec*/}
                <Headers
                    title={this.state.title}
                    infos={this.state.infos}
                    list={this.state.list}
                    childExec={(num) => this.changeCount(num)}
                    slotele={<div>传入React元素实现插槽</div>}
                    sloteleArea={(text) => <div>{text}</div>}
                >
                    <div className='children-1'>通过子元素实现插槽效果</div>
                    <div className='children-2'>通过 this.props.children 获取组件间的子元素</div>
                </Headers>
                <div>{this.state.count}</div>
                <div>=======================受控组件==================</div>
                <BrotherOne></BrotherOne>
                <div>=======================redux数据=================</div>
                <ReducerModule></ReducerModule>
            </div>
        );
    }
}
export default App;
