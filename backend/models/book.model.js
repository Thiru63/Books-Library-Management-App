const mongoose=require('mongoose')

const Schema=mongoose.Schema

const bookSchema=mongoose.Schema({
    
    userId:{
      type:Schema.Types.ObjectId,
      required:true,
      
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    published_year:{
        type:Number,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    isbn:{
        type:Number,
        required:true,
    }
})

const book=mongoose.model('notice',bookSchema)

module.exports=book