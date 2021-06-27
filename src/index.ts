import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Giovania Festas API",
            description: "Giovania Festas API",
            contact: {
                name: "leossb36@gmail.com"
            },
            servers: ["http://localhost:8000"]
        }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(8000, () => {
  console.log(`server running on port 8000`);
});