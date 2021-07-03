import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config({ path: './env' })

class MongoConfig {
    public connectDataBase (): void {
        const data = {
            url: process.env.DATABASE_URL,
            message: 'Success: Connect to DataBase'
        }

        try {
            const connection = process.env.DATABASE_URL || ''
            mongoose.connect(connection, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }, () => {
                console.log(data)
            })
        } catch (ex) {
            throw new Error(ex)
        }
    }
}

export default new MongoConfig()
