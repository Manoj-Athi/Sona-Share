import React , {useState} from 'react'
import './Profile.page.css'
const Profile = () => {
    const [Profile, setProfile] = useState("")
    const ProfileU = (e) =>{
        e.preventDefault()
        if(!Profile){
            alert('Profile Updated')
            return
        }
    }
    return (
        <section className="JoinPage-page"  >
            <div className="JoinPagecontainer" >
                <form className="bar" onSubmit={ProfileU}>
                    <label htmlFor="">
                        <h3 className="JoinPagelabelfont" >Profile </h3> <br/> 
                        <input type="text" placeholder="Name" className='form-input' name='name' />
                        <input type="text" placeholder="Example@123.com" className='form-input' name='name' />
                        <input type="text" placeholder="Department" className='form-input' name='name' />
                        <input type="text" placeholder="Phone No." className='form-input' name='name' />
                    </label>
                    { <label>
                        <input type="Submit" value="Update " className="JoinPage-submit-btn" />
                    </label> }
                </form>
            </div>
        </section>
    )
}

export default Profile