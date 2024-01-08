import { Link } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";


export const Navbar = () => {
   
  const state=useSelector(store=>store.authReducer)
  const dispatch=useDispatch()
 console.log(state)

 const logot=()=>{
  logout(dispatch)
 }

  return (
    <div className="nav" data-testid="nav">
      <Link to='/'>
      <div id="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1048/1048927.png"
          width={"20%"}
          alt=""
        />
        <h2
          style={{
            color: "#FF5722",
            fontFamily: "cursive",
            fontWeight: "800",
            margin: "5px 5px 0 10px",
          }}
        >
          Masai Library
        </h2>
      </div>
      </Link>

      <div className="nav-links">
        {(state.isAuth && state.token)?<>
          <Link to='/addbook'>
          <button id="addnewBtn" className="button">
            Add New Book
          </button>
          </Link>
          <button id="logoutBtn" onClick={logot}>Logout</button>
          <h5 data-testid="user-token">{state.user_data.name}</h5>
        </>:<>
        <Link to='/login'>
        <button id="loginBtn" className="button">
          Login
        </button>
        </Link>
        <Link to='/signup'>
        <button id="loginBtn" className="button">
          SignUp
        </button>
        </Link>
        </>}
        

        
      </div>
    </div>
  );
};
