import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { getDataBooks } from "../Redux/BookReducer/action";
import { Loading } from "../Components/Loading";
import { BookCard } from "../Components/BookCard";

export const Dashboard = () => {
  
  const dispatch=useDispatch()
  const state=useSelector(store=>store.booksReducer)
  console.log(state)

useEffect(()=>{
getDataBooks(dispatch)
},[])

  if(state.loading){
    return <Loading/>
  }

  return (
    <div style={{ textAlign: "center" }} id="dashBoard">
      <h1>Welcome to Masai Library Dashboard</h1>
      <div data-testid="all-books">{/* render all the books */}
      {state.books?.map((book,i)=>{
        return <BookCard key={book.id} book={book}/>
      })}
      </div>
    </div>
  );
};
