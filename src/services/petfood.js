import { getPetfoodByAnimal } from '../data/petfood'

export const petfood = ((animal) => {
    console.log('call petfood for ', animal)

    return getPetfoodByAnimal(animal)
})
