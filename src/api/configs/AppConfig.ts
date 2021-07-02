import express from 'express'
import cors from 'cors'
import mongoConfig from './MongoConnection'
import routes from '../rest/routes/routes'

class App {
    public express: express.Application

    constructor () {
        this.express = express()
        this.middlewares()
        this.databaseConnection()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private databaseConnection (): void {
        mongoConfig.connectDataBase()
    }

    private routes (): void {
        this.express.use(routes)
    }
}

export default new App().express
