import { types } from "../types/types";


// const state = {
//     name: 'Julian',
//     logged: true
// }

export const authReducer = (state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                ...action.payload,
                logged: false
            }
    
        default:
            return state;
    }
}