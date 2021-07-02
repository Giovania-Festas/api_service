import { Router } from 'express'

const clientRoutes = Router()

clientRoutes.get('/clients', (req, res) => {
    res.status(200).send({
        message: 'Hello Clients!'
    })
})

export default clientRoutes
