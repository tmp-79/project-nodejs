const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers/index');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config()

//connect DB
const connectDb = require("./config/db");
const { route } = require('./routers/index');
const rootRouter = require('./routers/index');
connectDb();

app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Categories REST API',
            description: "A REST API built with Express and MongoDB. This API provides movie categories and the context of the catchphrase in the movie."
        },
    },
    apis: ["./routers/category/index.js"]
}

const corsOptions = "http://localhost:4200";
// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors(corsOptions));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api',rootRouter);

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Up and running 🚀🚀🚀🚀🚀🚀 ${port} 🚀🚀🚀🚀🚀🚀`)
});
