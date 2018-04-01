import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../services/auth'
import './nav.css'
import { withRouter } from 'react-router-dom'
const auth = new Auth()

const Nav = ({ history }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <strong>Scotch Auth</strong>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link to='/about' className='navbar-item'>
            About
          </Link>
          <Link to='/profile' className='navbar-item'>
            Profile
          </Link>
          {auth.isAuthenticated()
            ? <div
              className='navbar-item join'
              onClick={() => {
                auth.logout(history)
              }}
              >
                Logout
              </div>
            : <div
              className='navbar-item join'
              onClick={() => {
                auth.login()
              }}
              >
                Join
              </div>}

        </div>
      </div>
    </nav>
  )
}
export default withRouter(Nav)
