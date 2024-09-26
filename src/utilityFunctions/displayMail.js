export default function displayMail({target}){
    const aquamarine = '#57ffff'

    const mailboxLinks = document.querySelectorAll('.mailbox-link')
    const mailboxes = document.querySelectorAll('.emails')

    mailboxLinks.forEach(
        mailboxLink => {
            if(mailboxLink !== target && mailboxLink.style.border !== 'none') mailboxLink.style.border = 'none'
        }
    )
    target.style.border = `solid 2px ${aquamarine}`
    //display emails
    const targetEmails = document.querySelector(`#emails-${target.id}`)
    targetEmails.innerHTML = ''

    mailboxes.forEach(
        mailbox => {
            if(mailbox !== targetEmails) mailbox.style.display = 'none'
        }
    )
    //fetch random temp messages
    if(target.id === 'inbox'){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(
            posts => {
                //select 6 random posts
                const startPos = Math.floor(Math.random() * posts.length)
                posts = posts.slice(startPos, startPos + 6)
                //
                posts.forEach(
                    (post, i) => {
                        const li = document.createElement('li')
                        li.title = 'click to read'
                        li.key = i
                        li.textContent = post.title
                        //
                        const crudOptionsContainer = document.createElement('div')
                        crudOptionsContainer.className = 'crud-options-container'

                        // const write = document.createElement('span')
                        // write.textContent = 'write'
                        // write.className = 'crud-option write'

                        const bin = document.createElement('span')
                        bin.title = 'delete'
                        bin.className = 'crud-option bin'
                        bin.addEventListener(
                            'click', ({target})=> target.parentElement.parentElement.style.display = 'none' 
                        )
                        //
                        targetEmails.appendChild(li)
                        //
                        li.appendChild(crudOptionsContainer)
                        // crudOptionsContainer.appendChild(write)
                        crudOptionsContainer.appendChild(bin)
                    }
                )
            },
            err => console.warn(err.message)
        )
    }
    //
    targetEmails.style.display = 'block'
}