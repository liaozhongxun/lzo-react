import { useNavigate } from 'react-router-dom'

// 高阶组件
export default function withRouter(WarpperComponent) {
    return function (props) {
        const navigate = useNavigate();
        const router = { navigate };
        return <WarpperComponent {...props} router={router} />
    }
}
