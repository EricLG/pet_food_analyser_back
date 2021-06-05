import { TEST } from './api'
import { petfood } from './services/petfood'

export const initRoutes = (app => {
    app.get('/', (req, res) => {
        console.log(TEST)
        res.send({
            message: 'hello world8'
        })
    })

    app.get('/catsfood', (req, res) => {
        console.log('Call Catsfood')
        res.send(petfood('cats'))
    })
})
