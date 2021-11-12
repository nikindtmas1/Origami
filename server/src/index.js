const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

const portConfig = require('./config/config');
const mongooseConfig = require('./config/configMongoose');



mongooseConfig(app);

app.listen(portConfig.development.PORT, () => console.log(`Server runing on port: ${portConfig.development.PORT}...`))