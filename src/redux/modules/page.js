//action types
const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'

//initial
const initialState = {
    year: 2016,
    photos: [],
    fetching: false
}

//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, fetching: true}
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false }
        default:
            return state
    }
}

//action creators
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