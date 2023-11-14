const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./config/mongoose.config'); 
require('dotenv').config();
app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json({limit: '30mb'}));                          
app.use(express.urlencoded({limit: '30mb', extended: true }));   

require('./routes/employee.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );
