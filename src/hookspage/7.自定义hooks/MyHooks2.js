import React, { memo } from 'react'
import { useLogLife, useScrollPosition } from './hooks'

const MyHooks2 = memo(() => {
    useLogLife();
    const [x, y] = useScrollPosition()
    return (
        <div style={{ width: "500px", height: "2000px" }}>{x}-{y}</div>
    )
})

export default MyHooks2