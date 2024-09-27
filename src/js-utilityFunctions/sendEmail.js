const sendEmail = (ev)=>{
    const emailForm = document.querySelector('#emails-compose')
    const emailToAddress = document.querySelector('#email-to-address')
    const emailSubject = document.querySelector('#email-subject')
    const emailBody = document.querySelector('#email-body')

    ev.preventDefault()
    //in the future, all of the form data would be sent to db
    //for now, send to express server
    const newEmail = {
        emailToAddress: emailToAddress.value,
        emailSubject: emailSubject.value,
        emailBody: emailBody.value
    }
    fetch(
        'http://localhost:8080',
        {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify(newEmail)
        }
    )
    .then(res => {
        if(res.status === 200 && res.body){
            emailForm.reset()
            return res.json()
        }
    })
    .then(info => console.log(info))
    .catch(err => console.warn(err))
}

export default sendEmail