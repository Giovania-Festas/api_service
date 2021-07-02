import { Router } from 'express'
import productRoutes from './productRoutes'
import orderRoutes from './orderRoutes'
import clientRoutes from './clientRoutes'

const routes = Router()

routes.use('/api', [productRoutes, orderRoutes, clientRoutes])

export default routes
