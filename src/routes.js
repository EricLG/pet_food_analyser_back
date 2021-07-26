import { petfoodRoutes } from './api/petfood'

export const initRoutes = (app => {
    petfoodRoutes(app)
    app.use((err, req, res, next) => {
        handleError(err, res)
    })
})

const handleError = (err, res) => {
    const { statusCode, message } = err
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    })
}
