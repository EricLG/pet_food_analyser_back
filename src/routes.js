import { petfoodRoutes } from './api/petfood'

export const initRoutes = (app => {
    petfoodRoutes(app)
})
