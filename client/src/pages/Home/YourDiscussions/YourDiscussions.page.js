import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './YourDiscussions.css'
import DisplayDiscussion from './DisplayDiscussion'
import { getDiscussion } from '../../../actions/discussions'
import JoinDiscussion from './JoinDiscussion'

const YourDiscussions = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.currentUserReducer)
    const discussions = useSelector(state => state.discussionsReducer)
    console.log(discussions)
    const toggleReminder = (id) => {
    //     setTasks(
    //        tasks.map((task) => task.id === id ? {...task , reminder: !task.reminder} : task)
    //     )
    }
    useEffect(() => {
        dispatch(getDiscussion(user?.result?._id))
    }, [dispatch])

    return (
        <>
            <div className='your-discussions'>
                <JoinDiscussion />
                <div className='your-discussion-container'>
                    <h1>Your Discussions</h1>
                    { discussions.length === 0 ? (
                        <h3>No discussions found</h3>
                    ) : (
                        discussions.map((discussion) => (
                           <DisplayDiscussion key={discussion._id} discussion={discussion}  toggleReminder={toggleReminder} />
                       ))
                    )}

                </div>
            </div>
        </>
    )
}

export default YourDiscussions
