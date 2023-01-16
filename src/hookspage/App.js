import React, { PureComponent } from 'react'
import CountClass from './1.useState-demo/CountClass'
import CountHook from './1.useState-demo/CountHook'

import SetTitleClass from './2.useEffect-demo/1.SetTitleClass'
import SetTitleHook from './2.useEffect-demo/2.SetTitleHook'

import UseContex from './3.useContext-demo'

import UseCallbac from './4.useCallback-demo'

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
      </div>
    )
  }
}

export default App