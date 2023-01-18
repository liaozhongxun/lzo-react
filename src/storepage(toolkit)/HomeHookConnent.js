import React, { memo, useEffect } from 'react'
// import { changeHomeNameAction } from "../store(toolkit)/home(丢弃)/actionCreators"
import { changeHomeNameAction, fetchDataAction } from "../store(toolkit)/module/home"
import { shallowEqual, useDispatch, useSelector } from "react-redux"; 

const Index = memo(() => {
    // useSelector 代替 mapStateToProps
    const { homename, banners } = useSelector((state) => {
        return {
            homename: state.home.homename,
            banners: state.home.banners
        }
    }, shallowEqual)

    // useDispatch 代替 mapDispatchToProps
    const dispatch = useDispatch();

    function view_change_name(name) {
        dispatch(changeHomeNameAction(name))
    }

    useEffect(()=>{
        dispatch(fetchDataAction())
    },[])

    return (
        <div>
            <div>homename: {homename}</div>
            <div>{banners.map(item => <span key={item.title}>title: {item.title}</span>)}</div>
            <button onClick={e => view_change_name('123')}>改变</button>
        </div>
    )
})


export default Index;  