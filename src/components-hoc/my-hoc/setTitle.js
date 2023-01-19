// 高阶组件,给使用的组件添加上 title
export default function setTitle(WarpperComponent) {
    return function (props) {
        console.log({...props}); // 将父级本来就有的props 和 我们要新增的数据 一起传递给子组件将
        return <WarpperComponent {...props} title='成功使用高阶组件 setTitle' />
    }
}
