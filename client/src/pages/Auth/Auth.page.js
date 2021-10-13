import React,{ useState } from 'react'
import { useParams, Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './Auth.css'
import { signup, login } from '../../actions/auth'

const Auth = () => {

    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    const initialValues = { name: '', email: '', password: ''}
    const [ authData, setAuthData ] = useState(initialValues)

    const handleChange = (e) =>{
        setAuthData({ ...authData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(id === 'signup'){
            dispatch(signup( authData, history))
        }else if(id === 'login'){
            // console.log( id, authData)
            dispatch(login( authData, history))
        }
    }

    return (
        <section className='auth-page'>
            <div className="auth-container">
                <form className='auth-form' onSubmit={handleSubmit}>
                    { id === 'signup' && (
                        <label htmlFor="">
                            <h3>Username</h3>
                            <input type="text" className='form-input' name='name' onChange={handleChange}/>
                        </label>
                    )}
                    <label htmlFor="">
                            <h3>Email</h3>
                            <input type="email" className='form-input' name='email' onChange={handleChange}/>
                    </label>
                    <label htmlFor="">
                            <h3>Password</h3>
                            <input type="password" className='form-input' name='password' onChange={handleChange}/>
                    </label><br/>
                    <input type="submit" className='auth-submit-btn' value={ id === 'signup' ? 'Signup': 'Log in' }/>
                </form>
                <p>{ id === 'signup' ? "Already have an account? " : "Don't have an account? " }
                    <Link to={id === 'signup' ? '/Auth/login' : '/Auth/signup'} className="switch-auth-btn">{id === 'signup' ? 'Log in' : 'Signup'}</Link> 
                </p>
            </div>
        </section>
    )
}

export default Auth
