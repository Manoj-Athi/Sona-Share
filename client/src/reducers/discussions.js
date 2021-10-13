const discussionsReducer = (discussions = [], action) => {
    switch(action.type) {
        case 'CREATE_DISCUSSION':
            return [ ...discussions, action.payload ];
        case 'FETCH_ALL_DISCUSSION':
            return action.payload ;
        case 'JOIN_DISCUSSION':
            return [ ...discussions, action.payload ] ;
        default :
            return discussions;
    }
}

export default discussionsReducer;
