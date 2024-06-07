import express from "express"
import {Book} from "../models/bookModel.js"

const router = express.Router()

router.post('/',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send("Required all field to be filled")
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

router.get('/',async (req,res)=>{
    try{
        const getAllBooks = await Book.find()
        return res.status(200).json({
            count:getAllBooks.length,
            data:getAllBooks
        })
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const getBook = await Book.findById(id)
        return res.status(200).send(getBook)
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const updateBook = await Book.findByIdAndUpdate(id,req.body)
        return res.status(200).json(updateBook)
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const updateBook = await Book.findByIdAndDelete(id)
        return res.status(200).json(updateBook)
    }catch(err){
        res.status(500).send({message:err.message})
    }
})


export default router