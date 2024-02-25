import express, {request, response} from "express"
import {PORT, mongoDBURL} from "./config.js"
import booksRoute from "./routes/booksRoute.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import cors from 'cors'

const app = express()

app.use(cors())
// app.use(cors({
//     origin: 'http:/localhost:3000',
//     methods:['GET','POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))


app.use(express.json())


app.get('/', (request, response) => {
    return res.status()
})
app.use('/books', booksRoute)

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log(`app connected to db`)
        app.listen(PORT, () => {
            console.log(`app is runnin on port ${PORT}`)
        })
    }).catch((error) => error.message)