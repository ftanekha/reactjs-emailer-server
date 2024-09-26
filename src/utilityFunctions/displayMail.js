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
                        li.textContent = post.title
                        li.key = i
                        targetEmails.appendChild(li)
                    }
                )
            },
            err => console.warn(err.message)
        )
    }
    //
    targetEmails.style.display = 'block'
}