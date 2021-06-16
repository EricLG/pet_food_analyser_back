import { petfoodByAnimal, petfoodDetail } from '../services/petfood'

export const petfoodRoutes = (app => {
    app.get('/petfood/:animal', async(req, res, next) => {
        try {
            res.send(await petfoodByAnimal(req.params.animal))
        } catch (error) {
            next(error)
        }
    })
    app.get('/petfood/:id/detail', async(req, res, next) => {
        try {
            res.send(await petfoodDetail(req.params.id))
        } catch (error) {
            next(error)
        }
    })
})
