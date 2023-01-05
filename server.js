//requirements
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

//dfinition du moteur de template
dotenv.config();
app.set('view engine','pug');
app.set('views', __dirname + '/views');

// Etablire une connexion à la base de données
mongoose.connect(process.env.DB_URI)
    .then(() => console.log('connected'))
    .catch(e => console.log('Error :',e));



//Démarage du serveur su le le port : PORT dans .env

app.listen(process.env.PORT,()=>console.log(` app listening on port localhost:${process.env.PORT}`));
