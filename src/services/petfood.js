import { getPetfoodByAnimal } from '../data/petfood'

export const petfood = (async(animal) => {
    return await getPetfoodByAnimal(animal)
})
