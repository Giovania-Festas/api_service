import { Router } from 'express'

const orderRoutes = Router()

orderRoutes.get('/orders', (req, res) => {
    res.status(200).send({
        message: 'Hello Orders!'
    })
})

export default orderRoutes
