import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom';

export class Login extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }

  loginToHome() {
    this.setState({
      isLogin: true
    })
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <div>{isLogin ? <Navigate to='/home' /> : "Login pages"}</div>
        <button onClick={() => this.loginToHome()}>登陆</button>
      </div>
    )
  }
}

export default Login