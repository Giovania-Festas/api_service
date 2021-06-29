import mongoose from 'mongoose'
import envronment from './Envronment'

class MongoConfig {
    public connectDataBase (): void {
        const data = {
            url: envronment.apiServerConnection,
            port: envronment.apiNodePort,
            message: 'Success: Connect to DataBase'
        }

        try {
            mongoose.connect(envronment.dataBaseUrl, {
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
