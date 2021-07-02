import * as dotenv from 'dotenv'

dotenv.config({ path: './env' })

export default {
    dataBaseUrl: process.env.DATABASE_URL || 'mongodb://mongo/giovaniaFestasDB',
    apiVersion: process.env.API_VERSION || '',
    apiTitle: process.env.API_TITLE || '',
    apiDescription: process.env.API_DESCRIPTION || '',
    apiContactName: process.env.API_CONTACT_NAME || '',
    apiServerConnection: process.env.API_SERVERS_CONNECT || '',
    apiRoutes: process.env.API_ROUTES || './src/api/rest/routes/routes.js',
    apiNodePort: process.env.NODE_PORT || 8000
}
