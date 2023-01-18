import { useEffect } from "react"

export function useLogLife() {
    useEffect(() => {
        console.log('组件被创建~~~')
        return () => {
            console.log("组件被销毁---")
        }
    }, [])

    // 可以return一些东西出去
}