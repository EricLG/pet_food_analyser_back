import { TEST } from './api'

export const initRoutes = (app => {
    app.get('/', (req, res) => {
        console.log(TEST)
        res.send({
            message: 'hello world8'
        })
    })
})
