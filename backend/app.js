const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const corsConfig = {
    credentials: true,
    origin: true,
};

//middlewares
app.use(bodyParser.json());
//app.use(express.json());
app.use(cors(corsConfig));

/*############################## TEST CODE ########################################*/

//Import from routes folder
const postRoute = require('./routes/posts');
app.use('/api/posts', postRoute)

app.get('/', (req, res) => {
    res.send('Hello from server!');
});

/*############################## TEST CODE ########################################*/


/*############################## USER AUTHENTICATION ########################################*/

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

/*############################## USER AUTHENTICATION ########################################*/

//Connect to DB
mongoose.connect(process.env.DBUrl,
    { useNewUrlParser: true },
    () => {
        console.log('Connected to DB!');
    }    
);

//listen
app.listen(3030);