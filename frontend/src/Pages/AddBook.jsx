import { useDispatch } from "react-redux";
import { postBook } from "../Redux/BookReducer/action";
import {useState} from 'react'


export const AddBook = () => {

  const dispatch=useDispatch()

  const[formdata,setFormdata]=useState({
    
      title: "",
      author: "",
      published_year: "",
      genre: "",
      isbn: ""
    
  })

  const handleChange=(e)=>{
    const {name,value}=e.target 
    setFormdata({...formdata,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    postBook(dispatch,formdata)
  }

  return (
    <div data-testid="add-new-page">
      <form className="form" data-testid="addbook-form" onSubmit={handleSubmit}>
        <p className="form-title">Add New Book</p>
        <div className="input-container">
          <span>Book Name</span>
          <input
            type="text"
            data-testid="book-title"
            placeholder="Enter Book Name"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Author Name</span>
          <input
            type="text"
            data-testid="book-author"
            placeholder="Enter Author Name"
            name="author"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Book published year</span>
          <input
            type="text"
            data-testid="book-published_year"
            placeholder="Enter book published year"
            name="published_year"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Book Genre</span>
          <input
            type="text"
            data-testid="book-genre"
            placeholder="Enter Book genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span style={{ color: "black" }}>Book isbn no</span>
          <input
            type="text"
            data-testid="book-isbn"
            placeholder="Enter Book isbn no"
            name="isbn"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
