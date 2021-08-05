import { getPetfoodByAnimal, getPetfoodDetail } from '../data/petfood'
import { Petfood } from '../models/petfood'

export const petfoodByAnimal = (async(animal, page) => {
    return await getPetfoodByAnimal(animal, page)
})

export const petfoodDetail = (async(id) => {
    Petfood.validateId(id)
    return await getPetfoodDetail(id)
})
