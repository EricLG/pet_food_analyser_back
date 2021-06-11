import cors from 'cors'

import { petfoodRoutes } from './api/petfood'

export const initRoutes = (app => {
    app.use(cors())
    petfoodRoutes(app)
})
