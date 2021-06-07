import { TEST } from './api'
import { petfoodRoutes } from './api/petfood'

export const initRoutes = (app => {
    app.get('/', (req, res) => {
        console.log(TEST)
        res.send({
            message: 'hello world8'
        })
    })
    petfoodRoutes(app)

})
