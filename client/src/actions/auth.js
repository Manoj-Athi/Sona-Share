import * as api from '../api/index'
import { setCurrrentUser } from './currentUser'

export const signup = (authData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('profile')) ))
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const login = (authData, history) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('profile')) ))
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

// export const isAuthenticated = () => {
//     const user = JSON.parse(localStorage.getItem('profile'))
//     return {
//         type: 'IS_USER',
//         data: user
//       }
// }