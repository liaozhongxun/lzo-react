import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

// 高阶组件
export default function withRouter(WarpperComponent) {
    return function (props) {
        // 导航跳转
        const navigate = useNavigate();

        // 获取动态路由参数
        const params = useParams();

        // 获取query参数(未解析)
        const location = useLocation();

        // 获取解析好的query参数 
        const [searchParams] = useSearchParams() // 返回一个数组，数组里有一些方法
        /**
         *   URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
         *      searchParams.get('a') 得到对象a属性的值
         *      将 Object.fromEntries(searchParams.entries()) 数据转成对象
         */
        const query = Object.fromEntries(searchParams.entries());

        const router = { navigate, params, location, query };
        return <WarpperComponent {...props} router={router} />
    }
}
