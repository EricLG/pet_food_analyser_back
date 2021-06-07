import { MongoClient } from 'mongodb'

const host = 'localhost'
const port = '27017'
const dbPetfoodAnalyser = 'petfoodAnalyser'
let mongoClientConnexion

export const initDb = function() {
    mongoClientConnexion = MongoClient.connect(`mongodb://${host}:${port}`, { useUnifiedTopology: true }).catch(() => {
        console.error(`Connection with mongodb://${host}:${port} cannot be done`)
        process.exit(-1)
    })
}

export const getDbPetfoodAnalyser = async function() {
    return (await mongoClientConnexion).db(dbPetfoodAnalyser)
}
