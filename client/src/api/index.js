import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        // console.log('get item')
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
        // req.userId = JSON.parse(localStorage.getItem('profile')).result._id
    }
    return req;
})

export const logIn = (authData) => API.post('/auth/login', authData);
export const signUp = (authData) => API.post('/auth/signup', authData);
export const createDiscussion = (discussionData) => API.post('/discussion/create', discussionData)
export const getDiscussion = (id) => API.get(`/discussion/get/${id}`);
export const joinDiscussion = (discussionData) => API.patch(`/discussion/join/`, discussionData);