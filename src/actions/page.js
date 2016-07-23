import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS
} from '../constants/actionTypes'

export function getPhotos(year) {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        })

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1,2,3,4,5,6,7]
            })
        }, 1500)
    }
}