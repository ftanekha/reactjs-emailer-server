import React from 'react'

function LogoutButton({logout}){
    return <button type='submit' className='loginToggleButton logoutButton' onClick={logout}>Log out</button>
}

export default LogoutButton