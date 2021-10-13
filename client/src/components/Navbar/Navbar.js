import React, { useState, useEffect } from 'react'
import { NavLink, useHistory,useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import decode from 'jwt-decode'

import './Navbar.css'
import { setCurrrentUser } from '../../actions/currentUser'

const Navbar = () => {

  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))

    const handleLogout = () => {
      dispatch({ type: 'LOGOUT' });
      history.push('/')
      dispatch(setCurrrentUser(null))
    }

    useEffect(() => {
      const token = User?.token
      if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()){
              handleLogout()
          }
      }
      dispatch(setCurrrentUser( JSON.parse(localStorage.getItem('profile')) ))
    }, [User?.token, dispatch])

    return (
        <nav className='nav'>
          <div>
            <NavLink to='/' className="nav-title"><span>Sona</span><span> Share</span> </NavLink>
          </div>
          <div>
            {
              User && <NavLink exact to='/' className="nav-link" activeClassName="nav-link-selected">Your Discussions</NavLink>
            }
            <NavLink to='/CreateDiscussion' className="nav-link" activeClassName="nav-link-selected">Create Discussion</NavLink>
            {
              // User && <NavLink to='/JoinDicussion' className="nav-link" activeClassName="nav-link-selected">Join Discussion</NavLink>
            }
            {
              !User ? (
              <><NavLink to='/Auth/signup' className="nav-link" activeClassName="nav-link-selected">Signup</NavLink>
              <NavLink to='/Auth/login' className="nav-link" activeClassName="nav-link-selected">Login</NavLink></>
              ) : (
                <><NavLink to='/Profile' className="nav-avatar">{User.result.name.charAt(0).toUpperCase()}</NavLink>
                <button type="button" className="logout-btn" onClick={handleLogout}>Log out</button></>
              )
            }
          </div>
        </nav>
    )
}

export default Navbar
