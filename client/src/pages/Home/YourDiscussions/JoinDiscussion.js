import React , {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import './JoinDiscussion.css'
import { joinDiscussion } from '../../../actions/discussions'
const JoinDiscussion = () => {

    const [discussionId,SetDiscussionId] = useState("")
    const user = useSelector(state => state.currentUserReducer)
    const dispatch = useDispatch()
    const SayDiscussionCode = (e) =>{
        e.preventDefault()
        if(!discussionId){
            alert('Enter Discussion Code')
            return
        } else{
            dispatch(joinDiscussion({ discussionId, username: user?.result?.name }))
        }
    }
    
    return (
        <div className="Join-container" >
            <form className="bar" onSubmit={SayDiscussionCode}>
                <label htmlfor=" " >
                    <input type="text" placeholder="Enter Discussion Code" maxlength="8" className="searchbar" onChange={(e)=>SetDiscussionId(e.target.value)}  />
                    <input type="submit" value="Join" className="JoinPageJoinButton" />                      
                </label>
            </form>
        </div>
    )
}

export default JoinDiscussion