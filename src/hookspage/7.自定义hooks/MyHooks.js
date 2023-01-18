import React, { memo } from 'react'
import { useLogLife } from './hooks'

const MyHooks = memo(() => {
    useLogLife()
    return (
        <div>MyHooks</div>
    )
})

export default MyHooks