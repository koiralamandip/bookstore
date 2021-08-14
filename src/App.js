import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { arrayOfBooks } from "./data"
import Header from "./components/Header";
import Books from "./components/Books";
import Cart from "./components/Cart";

function App() {

  const dispatch = useDispatch();

  // Fetch all books on initial App render
  // The list of books from /src/data/index.js is added to the redux store and is updated on screen
  // REMINDER:: CORS error for fetching the list from given API :: 
  useEffect(() => {
    dispatch({type: "FETCH_BOOKS", payload: {name: "", filter: "", books: arrayOfBooks}})
  }, [])
  
  return (
    <div className="App">
      <div className="MainSection">
        {/* <Header/> Contains logo and SearchBar */}
        <Header/>
        <div className="body">
          {/* <Books/> displays a grid of books */}
          <Books/>
        </div>
      </div>
      <div className="RightSection">
        <div className="UserData">
            {/* User details section, when implemented.. Currently a background image is added */}
        </div>
        {/* <Cart/> display cart items */}
        <Cart/>
      </div>
    </div>
  );
}

export default App;
