import { petfood } from '../services/petfood'

export const petfoodRoutes = (app => {
    app.get('/catsfood', async(req, res) => {
        res.send(await petfood('cats'))
    })
})
