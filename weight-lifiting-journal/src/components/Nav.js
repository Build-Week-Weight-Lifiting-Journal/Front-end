import React from 'react';
import { NavLink, withRouter  } from 'react-router-dom';

const Nav = (props) => {
    
    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('messages')
        props.history.push('/')
    }
    
    return(
        localStorage.getItem('token')
        ?
            <NavLink  onClick={logOut} to='/'>logOut</NavLink>
        :
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sign-up'>Sign Up</NavLink>
            <NavLink to='/login' >Sign In</NavLink>
        </div>

    )
}

export default withRouter(Nav);