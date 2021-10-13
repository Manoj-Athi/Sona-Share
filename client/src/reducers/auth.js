const authReducer = (state = { data: null}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, data: action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null};
        // case 'IS_USER':
        //     return action.data
        default:
            return state;
    }
}

export default authReducer;