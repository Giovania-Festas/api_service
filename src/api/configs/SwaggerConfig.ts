import swaggerJsDoc from 'swagger-jsdoc'
import envronment from './Envronment'

class SwaggerConfiguration {
    public swaggerDocs: swaggerJsDoc.OAS3Options

    constructor () {
        this.swaggerDocs = swaggerJsDoc(swaggerOptions)
    }
}

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: envronment.apiVersion,
            title: envronment.apiTitle,
            description: envronment.apiDescription,
            contact: {
                name: envronment.apiContactName
            },
            servers: [envronment.apiServerConnection]
        }
    },
    // ['.routes/*.js']
    apis: [envronment.apiMainFile]
}

export default new SwaggerConfiguration()
