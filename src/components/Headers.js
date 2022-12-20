import React from "react"; // imr
import PropTypes from 'prop-types' // impt 用来限制props数据类型
// 子组件
class Headers extends React.Component {
    constructor(props) {
        // props 接收父组件传入的所有数据
        super(props);
        this.state = {};

        console.log(this.props); // 可以直接使用
    }

    changeData() {
        this.props.childExec(3)
    }

    render() {
        return (
            <div>
                <div>父传子 =》 {this.props.title}</div>
                <div>子传父 =》 <button onClick={e => this.changeData()}>+3</button></div>
                <div className="slot">
                    <span className="left">子元素的使用 =》 left</span>
                        {this.props.children[0]} {/* 弊端就是需要多个子元素的话，所有都在列表，位置无法固定 */}
                        {this.props.slotele}
                        {this.props.sloteleArea('作用域插槽，内容自定')}
                    <span className="right">right</span>
                </div>
            </div>
        );
    }
}

// 如果需要限制类型的话，也可以用ts
Headers.propTypes = {
    title: PropTypes.string.isRequired, // 字符串类型，并且必传
    infos: PropTypes.object,
    list: PropTypes.array,
    slotele: PropTypes.element
};

// 设置默认值 
Headers.defaultProps = {
    list: [],
    infos: {},
    slotele:<div>默认</div>
}

export default Headers;
