const express=require('express')
const { userRegister, userLogin } = require('../controllers/user.controller')
const { createBook, getAllBooks, updateBook, deleteBook } = require('../controllers/book.controller')
const { userAuthenticationMiddleware } = require('../middlewares/userAuthentication.middleware')

const router=express.Router()

// user routes
router.post('/register',userRegister)
router.post('/login',userLogin)

// Book routes
router.post('/book',userAuthenticationMiddleware,createBook)
router.get('/book',userAuthenticationMiddleware,getAllBooks)
router.put('/book/:BookId',userAuthenticationMiddleware,updateBook)
router.delete('/book/:BookId',userAuthenticationMiddleware,deleteBook)

module.exports= {router}