import { getPetfoodByAnimal, getPetfoodDetail } from '../data/petfood'

export const petfoodByAnimal = (async(animal) => {
    return await getPetfoodByAnimal(animal)
})

export const petfoodDetail = (async(id) => {
    return await getPetfoodDetail(id)
})
