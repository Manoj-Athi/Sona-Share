import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

import './Create.page.css'
import { createDiscussion } from '../../actions/discussions'
import Button from '../../components/Button/Button'
import copy from 'copy-to-clipboard'

const Create = () => {
    const [discussionName , setDisscussionName] = useState("")
    const [discussionBio , setDiscussionBio] =useState("")
    const [switchContainer, setSwitchContainer] = useState(false)
    const [discussionId, setDiscussionId] = useState()
    const dispatch = useDispatch()
    const user = useSelector(state => state.currentUserReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        const code = parseInt(Math.random()*1000000)
        setDiscussionId(code)
        // console.log({discussionName,discussionBio, discussionId: code,createdBy: user?.result?.name })
        dispatch(createDiscussion({discussionName,discussionBio, discussionId:code ,createdBy: user?.result?.name }))
        setSwitchContainer(!switchContainer)
    }

    const copyToClipboard = () => {
        copy(discussionId)
        alert(`Copied text ${discussionId}`)
    }
    const handleGoback = () => {
        setSwitchContainer(!switchContainer)
        // setDiscussionId(null)
    }

    return (
        <section className='Create-page'  >
            {
                !switchContainer ? (
                    <form className='Create-container' onSubmit={handleSubmit} >
                        <label htmlFor="">
                            <h3 className="labelfont">Discussion Name</h3>
                            <input onChange={(e)=>setDisscussionName(e.target.value)} type="text" className='Createform-input' />
                        </label>
                        <label htmlFor="">
                            <h3 className="labelfont">Discussion Bio</h3>
                            <textarea rows="4" cols="50" type="text" className='Createform-input'  onChange={(e)=>setDiscussionBio(e.target.value)} />
                        </label> <br/>
                        <input type="submit" value="Create Discussion" className='Create-submit-btn'  />
                    </form>
                ) : (
                    <div className='Create-container'>
                        <h3 style={{display:"flex", justifyContent:'space-between'}}>
                            { `${discussionName}'s discussion id is ${discussionId}` }
                            <Button onClick={copyToClipboard} type='submit' px='8px' py='8px' color='#5D3FD3' backgroundColor='#f0ecf7' border='#5D3FD3' hoverBg='#5D3FD3' hoverColor='#f0ecf7'>
                                <FontAwesomeIcon icon={ faCopy }/>
                            </Button>
                        </h3>
                        <p style={{fontSize: "12px"}}>Copy and share the above code for others to join</p>
                        <Button onClick={handleGoback} type='submit' px='14px' py='8px' color='white' backgroundColor='#5D3FD3' hoverBg='#f0ecf7' hoverColor='black' border='#5D3FD3'>
                            Go back
                        </Button>
                    </div>
                )
            }
        </section>
    )
}

export default Create