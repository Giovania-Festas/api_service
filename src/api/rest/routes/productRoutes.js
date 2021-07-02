import { Router } from 'express'

const productRoutes = Router()

productRoutes.get('/products', (req, res) => {
    res.status(200).send({
        message: 'Hello Products!'
    })
})

export default productRoutes
