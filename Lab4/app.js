/* eslint-disable quotes */
"use strict";

const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRouter);
app.use('/users', userRouter);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(function(err, req, res, next) {
    res.status(500).send('Something went wrong, please try again!');
});


app.listen(8080, () => console.log('listening on 8080...'));