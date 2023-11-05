import mongoos from 'mongoose'

let isConnected = false // variable to check 

export const connectToDB =async () => {
    mongoos.set('strictQuery', true)

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found')
    if(isConnected) return console.log('Already connected to MongoDB')

    try {

        await mongoos.connect(process.env.MONGODB_URL)

        isConnected = true
        
    } catch (error) {
        console.log(error)
    }
}