function createEmail(emailProps){
    const email = document.createElement('table')
    email.className = 'inboxEmail'

    for(const emailProp in emailProps){
        const row = document.createElement('tr')

        const emailPropName = document.createElement('td')
        emailPropName.textContent = emailProp

        const emailPropContent = document.createElement('td')
        emailPropContent.textContent = emailProps[emailProp]

        row.append(...[emailPropName, emailPropContent])
        email.appendChild(row)
    }
    
    return email
}

export default createEmail