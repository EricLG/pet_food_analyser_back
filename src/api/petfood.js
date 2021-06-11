import { petfood } from '../services/petfood'

export const petfoodRoutes = (app => {
    app.get('/petfood/:animal', async(req, res) => {
        res.send(await petfood(req.params.animal))
    })
})
