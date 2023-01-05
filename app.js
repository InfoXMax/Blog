
    //requirements
    const express = require('express');
    const app=express();
    const router = require('./routes/postRoutes')

    //utiliser les middleware nissecaires

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/public', express.static('./public'));

    //Definition des routes

    app.use('/posts',router)


    module.exports=app