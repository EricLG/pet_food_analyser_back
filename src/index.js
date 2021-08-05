import * as express from 'express'

import { initCollection } from './data/petfood'
import { initDb } from './initDatabase'
import { initRoutes } from './routes'

const app = express()
const PORT = 3000

app.use(express.json())
initDb()
initRoutes(app)
initCollection(false)

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
})
