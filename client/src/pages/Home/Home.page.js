import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import YourDiscussions from './YourDiscussions/YourDiscussions.page'
import Landing from './Landing/Landing.page';

const Home = () => {

    const User = useSelector(state => state.currentUserReducer)

    return (
        <div>
            {
                User ? <YourDiscussions /> : <Landing />
            }
        </div>
    )
}

export default Home
