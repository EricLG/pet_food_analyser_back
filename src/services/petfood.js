import { getPetfoodByAnimal, getPetfoodDetail } from '../data/petfood'
import { Petfood } from '../models/petfood'

export const petfoodByAnimal = (async(animal) => {
    return await getPetfoodByAnimal(animal)
})

export const petfoodDetail = (async(id) => {
    Petfood.validateId(id)
    return await getPetfoodDetail(id)
})
