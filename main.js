require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerClient = require('./routes/client');
const routerDashboard = require('./routes/dashboard');
const routerAdmin = require('./routes/admin');
const routerRapport = require('./routes/rapport');
const cors = require('cors');
const path = require('path');
const methodOverride = require('method-override');
const { PORT, DB_NAME, DB_PASSWORD, DB_USER, NODE_ENV} = require('./config');



// connection 
const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wkroh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise
mongoose.connect(connectionStr, {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=> {
    console.log('Database connected');
})
.catch((err) => {
    console.log(err.message);
})


// configure the app to use bodyParser() and cros
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));





// pour les route
app.use('/api/clients', routerClient);
app.use('/api/admins', routerAdmin);
app.use('/api/dashboard', routerDashboard);
app.use('/api/files', routerRapport);


// pour afficher les erreur
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message : 'warnning'
    })
})



if(NODE_ENV === 'production') {
    app.use(express.static('public'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    })
}



// pour declanche le serveur
app.listen(PORT, () => {
    console.log(`Server Running with port: ${PORT}`);
})


