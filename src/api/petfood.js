import { petfoodByAnimal, petfoodDetail } from '../services/petfood'

export const petfoodRoutes = (app => {
    app.get('/petfood/:animal', async(req, res) => {
        res.send(await petfoodByAnimal(req.params.animal))
    })
    app.get('/petfood/:id/detail', async(req, res) => {
        res.send(await petfoodDetail(req.params.id))
    })
})
