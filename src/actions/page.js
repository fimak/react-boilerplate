import { SET_YEAR } from '../constants/actionTypes'

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}