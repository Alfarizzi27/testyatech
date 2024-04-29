const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { connect } = require('./config/mongo')
const routes = require('./routes/index')
const mongoose = require('mongoose')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)
// app.get('/', (_, res) => res.json("Welcome to jungle bro"))


connect()
    .then(db => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    })
