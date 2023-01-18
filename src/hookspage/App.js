import React, { PureComponent } from 'react'
import CountClass from './1.useState-demo/CountClass'
import CountHook from './1.useState-demo/CountHook'

import SetTitleClass from './2.useEffect-demo/1.SetTitleClass'
import SetTitleHook from './2.useEffect-demo/2.SetTitleHook'

import UseContex from './3.useContext-demo'

import UseCallbac from './4.useCallback-demo'

import UseMemoHook from './5.useMemo-demo/UseMemoHook'

import UseRefHookDom from './6.useRef-demo/UseRefHook-dom'
import UseRefHook from './6.useRef-demo/UseRefHook-闭包陷阱'

import MyHooks from './7.自定义hooks/MyHooks'
import MyHooks2 from './7.自定义hooks/MyHooks2'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className='title'>Hook useState 的使用 <hr /></div>
        <div>class connt:</div>
        <CountClass></CountClass>
        <div>hook connt:</div>
        <CountHook></CountHook>
        <br />
        <div className='title'>Hook useEffect 的使用 <hr /></div>
        <SetTitleClass></SetTitleClass>
        <SetTitleHook></SetTitleHook>
        <br />
        <div className='title'>Hook UseContext 的使用 <hr /></div>
        <UseContex></UseContex>
        <div className='title'>Hook useCallback 的使用 <hr /></div>
        <UseCallbac></UseCallbac>
        <div className='title'>Hook useMemo 的使用 <hr /></div>
        <UseMemoHook></UseMemoHook>
        <div className='title'>Hook useRef 的使用 <hr /></div>
        <UseRefHookDom></UseRefHookDom>
        <UseRefHook></UseRefHook>
        <div className='title'>自定义hook <hr /></div>
        <MyHooks></MyHooks>
        <MyHooks2></MyHooks2>
      </div>
    )
  }
}

export default App