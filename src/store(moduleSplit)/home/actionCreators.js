import * as actionTypes from "./constants"

export const changeHomeNameAction = (homename) => ({
    type: actionTypes.CHANGE_HOMENAME,
    homename
})

export const changeBannersAction = (banners) => ({
    type: actionTypes.CHANGE_BANNERS,
    banners
})

export const getAsyncDataAction = () => {
    return (dispatch, getState) => {
        console.log(getState())
        setTimeout(() => {
            dispatch(changeBannersAction([{ title: "dispatch func banners" }]))
        }, 2000);
    }
}