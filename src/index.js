import * as express from 'express'

import { TEST } from './api'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log(TEST)
    res.send({
        message: 'hello world7'
    })
})
app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
})
