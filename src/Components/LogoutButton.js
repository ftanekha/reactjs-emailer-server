import React from 'react'

function LogoutButton({logout}){
    return <button type='button' className='loginToggleButton logoutButton' title='See ya! 👋🏾👨🏾' onClick={logout}>Log out</button>
}

export default LogoutButton