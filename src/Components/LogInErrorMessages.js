function LogInErrorMessages({isUsernameValid, isPasswordValid}){
    return (
        <ul id='login-error-messages-container' style={{display: !isUsernameValid || !isPasswordValid ? 'block' : 'none'}}>
            {!isUsernameValid && <li>invalid username!</li>}
            {!isPasswordValid && <li>invalid password!</li>}
        </ul>
    )
}

export default LogInErrorMessages