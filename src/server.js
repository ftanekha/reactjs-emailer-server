const express = require('express')
const cors = require('cors')

const pathName = '/'
const port = 8080

const app = express()
app.use(cors())
app.use(express.text())

app.post(
    pathName,
    (req, res)=>{
        const  {emailToAddress, emailSubject, emailBody} = JSON.parse(req.body)

        console.table({emailToAddress, emailSubject, emailBody})
        res.send(emailBody)
    }
)

app.listen(
    port, 
    () => console.log(`Express app listening on port ${port}`)
)