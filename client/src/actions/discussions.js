import * as api from '../api/index'

export const createDiscussion = (discussionData) => async (dispatch) => {
    try {
        const { data } = await api.createDiscussion(discussionData)
        dispatch({ type: 'CREATE_DISCUSSION', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getDiscussion = (id) => async (dispatch) => {
    try {
        const { data } = await api.getDiscussion(id)
        dispatch({ type: 'FETCH_ALL_DISCUSSION', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const joinDiscussion = (discussionData) => async (dispatch) => {
    try {
        const { data } = await api.joinDiscussion(discussionData)
        dispatch({ type: 'JOIN_DISCUSSION', payload: data })
    } catch (error) {
        console.log(error)
    }
}