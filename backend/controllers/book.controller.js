
const Book=require('../models/book.model.js')

// Book create

const createBook=async (req,res)=>{

    
    try {
        let {title,author,published_year,genre,isbn}=req.body
    
    
        
        if(!title||!author||!published_year||!genre||!isbn){
            return res.status(400).send({
                message:"Please Fill All Fields"
            })
        }

    let book=await Book.create({
        userId:req.user._id,
        title,
        author,
        published_year,
        genre,
        isbn
    })

    return res.status(201).send({
        message:'Book is created successfully'
    })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Something error occured so please try again later"
        })
    }

}

// retrieve Books
const getAllBooks=async (req,res)=>{

    
    try {
        let books=await Book.find({userId:req.user._id})
        if(books.length>0){
            return res.status(200).json(books)
        }else{
            return res.status(400).send({
                message:'No Books'
            })
        }
    
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Something error occured so please try again later"
        })
    } 

    



    

}

// update Books
const updateBook=async (req,res)=>{

    try {
        let {BookId}=req.params
    let {title,author,published_year,genre,isbn}=req.body
    if(!BookId){
        return res.status(400).send({
            message:'Invalid request'
        })
    }

    let book=await Book.findOne({userId:req.user._id,_id:BookId})
    if(!book){
        return res.status(404).send({
            message:'No Book'
        })
    }

    await Book.findOneAndUpdate({userId:req.user._id,_id:BookId},{
        title,
        author,
        published_year,
        genre,
        isbn
    })

    return res.status(200).send({
        message:'Book is updated successfully'
    })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Something error occured so please try again later"
        })
    }


}

// delete Books
const deleteBook=async (req,res)=>{

    try {
        let {BookId}=req.params
    
    if(!BookId){
        return res.status(400).send({
            message:'Invalid request'
        })
    }

    let book=await Book.findOne({userId:req.user._id,_id:BookId})
    if(!book){
        return res.status(404).send({
            message:'No Book'
        })
    }

    await Book.deleteOne({userId:req.user._id,_id:BookId})

    return res.status(200).send({
        message:'Book is deleted successfully'
    })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Something error occured so please try again later"
        })
    }


}

module.exports={
    createBook,
    getAllBooks,
    updateBook,
    deleteBook
}