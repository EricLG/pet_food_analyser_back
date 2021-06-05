import * as express from 'express'

import { initDatabase } from './initDatabase'
import { initRoutes } from './routes'

const app = express()
const PORT = 3000

initDatabase()
initRoutes(app)

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
})
