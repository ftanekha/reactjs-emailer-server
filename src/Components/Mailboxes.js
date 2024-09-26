import React from 'react'
import LogoutButton from './LogoutButton.js'

function Mailboxes({style, logout}){
    return(
        <div className='mailboxes-container' style={style}>
            <div className='mailboxes'>
                <ul>
                    <li id='compose' key='compose' className='' style={{backgroundColor: '#57ffff', color: 'black'}}>Compose</li>
                    <li id='inbox' key='inbox' className='mailbox-link'>Inbox</li>
                    <li id='sent' key='sent' className='mailbox-link'>Sent</li>
                    <li id='drafts' key='drafts' className='mailbox-link'>Drafts</li>
                    <li id='bin' key='bin' className='mailbox-link'>Bin</li>
                </ul>
            </div>
            <div className='emails-container'>
                <ul id='emails-inbox' className='emails'></ul>
                <ul id='emails-sent' className='emails'></ul>
                <ul id='emails-drafts' className='emails'></ul>
                <ul id='emails-bin' className='emails'></ul>
            </div>
            <LogoutButton className='loginToggleButton logoutButton' logout={logout}/>
        </div>
    )
}

export default Mailboxes