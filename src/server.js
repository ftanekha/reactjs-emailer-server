const express = require('express')
const cors = require('cors')

const pathName = '/'
const port = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.text())

app.post(
    pathName,
    (req, res)=>{
        const body = JSON.parse(req.body)
        console.info('received new email:')
        console.table(body)
        res.json(body)
    }
)

app.listen(
    port, 
    () => console.log(`Express app listening on port ${port}`)
)