import { ObjectId } from 'mongodb'

import { getDbPetfoodAnalyser } from '../initDatabase'

const petfoodCollection = 'petfood'

export const getPetfoodByAnimal = async function(animal, page) {
    const db = await getDbPetfoodAnalyser()
    const list = await db.collection(petfoodCollection)
        .find({animal: animal})
        .sort({_id: 1})
        .skip((page.page * page.pageSize) - page.pageSize)
        .limit(page.pageSize)
        .toArray()

    page.collectionSize = await db.collection(petfoodCollection).count({animal: animal})
    return { list: list, page: page }
}

export const addPetfood = async function(petfood) {
    const db = await getDbPetfoodAnalyser()

    return await db.collection(petfoodCollection).insert(petfood)
}

export const getPetfoodDetail = async function(id) {
    const db = await getDbPetfoodAnalyser()
    const _id = new ObjectId(id)

    return await db.collection(petfoodCollection).findOne({_id})
}

export const initCollection = async function(allow) {
    const list =[
        { animal: 'cats', brand: '1ST CHOICE', reference: 'Contrôle Du Poids Adulte', foodType: 'Croquettes', ingredients: 'Poulet frais, Farine de poulet, Riz' },
        { animal: 'cats', brand: '1ST CHOICE', reference: ' Peau et Pelage Santé Pour Chat Adulte Flocons de Saumon', foodType: 'Croquettes', ingredients: 'Saumon, Gomme de guar, Huile de thon' },
        { animal: 'cats', brand: 'Aatu', reference: 'Free Run Chicken (Poulet)', foodType: 'Croquettes', ingredients: 'Poulet, Patate douce, Pois chiches' },
        { animal: 'dogs', brand: '1ST CHOICE', reference: 'Croissance miniature', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
        { animal: 'dogs', brand: '1ST CHOICE', reference: 'Croissance moyennes', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
        { animal: 'dogs', brand: 'Aatu', reference: 'Aatu', foodType: 'Croquettes', ingredients: 'Saumon, Hareng déshydraté, Patate douce' },
        { animal: 'cats', brand: '1ST CHOICE', reference: 'Contrôle Du Poids Adulte', foodType: 'Croquettes', ingredients: 'Poulet frais, Farine de poulet, Riz' },
        { animal: 'cats', brand: '1ST CHOICE', reference: ' Peau et Pelage Santé Pour Chat Adulte Flocons de Saumon', foodType: 'Croquettes', ingredients: 'Saumon, Gomme de guar, Huile de thon' },
        { animal: 'cats', brand: 'Aatu', reference: 'Free Run Chicken (Poulet)', foodType: 'Croquettes', ingredients: 'Poulet, Patate douce, Pois chiches' },
    ]

    if (allow) {
        const db = await getDbPetfoodAnalyser()

        await db.collection(petfoodCollection).insertMany(list)
    }
}
