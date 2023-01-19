import React, { memo, useRef } from 'react'
import { useLogLife, useScrollElement } from './hooks'

const MyHooks2 = memo(() => {
    useLogLife();
    const scrollDomRef = useRef()
    // const [x, y] = useScrollPosition()
    const [x, y] = useScrollElement(scrollDomRef)
    
    return (
        <div className='scroll' ref={scrollDomRef} style={{ width: "120%", height: "250px",overflow:'auto',position:"relative" }}>
            <div className='scrollInner' style={{width:"150%"}}>{[...Array(1000).keys()].map((item)=> <div key={item}>{x}-{y}</div>)}</div>
        </div>
    )
})

export default MyHooks2