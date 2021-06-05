import { MongoClient } from 'mongodb'

export const initDatabase = (() => {

    const url = 'mongodb://localhost:27017'
    const client = new MongoClient(url, { useUnifiedTopology: true })

    client.connect(function(err) {
        if (err === null) {
            console.log('Connected successfully to server')
        }

        client.close()
    })
})

