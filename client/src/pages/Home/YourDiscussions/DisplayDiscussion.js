import './YourDiscussions.css'
import Avatar from '../../../components/Avatar/Avatar'

const DisplayDiscussion = ({discussion,  toggleReminder}) => {
    return (
        <div className='discussion'  onDoubleClick ={() => toggleReminder(discussion._id)}>
            <Avatar value={discussion?.discussionName.charAt(0).toUpperCase()} backgroundColor="#5D3FD3" color="white" fontSize="20px" px="20px" py="12px" borderRadius='50%'/>
            <div className='discussion-content-1'>
                <h3>{discussion?.discussionName}</h3>
                <div className='discussion-content-2'>
                    <p>{discussion?.discussionBio}</p>
                    <p>{discussion?.createdBy}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayDiscussion;