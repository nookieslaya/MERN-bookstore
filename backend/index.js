import express, {request, response} from "express"
import {PORT, mongoDBURL} from "./config.js"

import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";

const app = express()

app.use(express.json())


app.get('/', (request, response) =>{
    return res.status()
})

app.post('/books', async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook)
        return response.status(201).send(book)
    }
    catch (error){
        console.log(error.message)
        response.status(500).send({message : error.message})
    }
})

// Get all books from DB

app.get('/books', async (request, response)=>{
    try{
const books = await Book.find({})
        return response.status(200).json({
            count: books.length,
            data:books
        })
    }
    catch (error){
        console.log(error.message)
        response.status(500).send({message : error.message})
    }
})

// get single book from DB
app.get('/books/:id', async (request, response)=>{
    try{

        const {id} = request.params

const book = await Book.findById(id)
        return response.status(200).json(book)
    }
    catch (error){
        console.log(error.message)
        response.status(500).send({message : error.message})
    }
})

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log(`app connected to db`)
        app.listen(PORT, () => {
            console.log(`app is runnin on port ${PORT}`)
        })
    }).catch((error) => error.message)