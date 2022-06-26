const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config()

//connect DB
const connectDb = require("./config/db");
const rootRouter = require('./routers/index');
connectDb();

app.use(express.json());


const corsOptions = "http://localhost:4200";
// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors(corsOptions));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api', rootRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Up and running 🚀🚀🚀🚀🚀🚀 ${port} 🚀🚀🚀🚀🚀🚀`)
});
