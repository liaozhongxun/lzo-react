import { useState, useEffect } from "react"

function useScrollElement(ele) {
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        function handleScroll() {
            console.log('111')
            // console.log(window.scrollX, window.scrollY)
            setScrollX(ele.current.scrollLeft)
            setScrollY(ele.current.scrollTop)
        }

        console.log(ele.current)
        ele.current.addEventListener("scroll", handleScroll)
        return (ele) => {
            ele.current.removeEventListener("scroll", handleScroll)
        }
    }, [ele])

    return [scrollX, scrollY]
}

export default useScrollElement
