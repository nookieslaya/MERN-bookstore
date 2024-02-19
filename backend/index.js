import express from "express"
import {PORT, mongoDBURL} from "./config.js"

const app = express()
import mongoose from "mongoose";


app.get('/', (req, res) => {

})


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log(`app connected to db`)
        app.listen(PORT, () => {
            console.log(`app is runnin on port ${PORT}`)
        })
    }).catch((error) => error.message)