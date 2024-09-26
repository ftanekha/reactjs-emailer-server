import LoginButton from './LoginButton.js'

function LoginForm({handleLoginFormSubmit, setUsername, setPassword, username, password, loginFormDisplay}){
    return(
        <form id='login-form' onSubmit={handleLoginFormSubmit} style={{display: loginFormDisplay? 'flex': 'none'}}>
            <input type='text' onChange={(e)=>{
                setUsername(e.target.value)
            }} value={username}/>
            <input type='password'  onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password}/>
            <LoginButton/>
      </form>
    )
}

export default LoginForm