export default function displayMail(){
    const aquamarine = '#57ffff'

    const mailboxLinks = document.querySelectorAll('.mailbox-link')
    const mailboxes = document.querySelectorAll('.emails')

    mailboxLinks.forEach(
        mailboxLink => {
            mailboxLink.addEventListener(
                //highlight current/selected mailbox
                'click', ({target})=>{
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
                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(
                        posts => {
                            posts.length = mailboxLinks.length
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
                    //
                    targetEmails.style.display = 'block'
                }
            )
        }
    )

}