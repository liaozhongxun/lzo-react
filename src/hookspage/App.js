import React, { PureComponent } from 'react'
import CountClass from './useState-demo/CountClass'
import CountHook from './useState-demo/CountHook'

import SetTitleClass from './useEffect-demo/1.SetTitleClass'
import SetTitleHook from './useEffect-demo/2.SetTitleHook'

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
      </div>
    )
  }
}

export default App