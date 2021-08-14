import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { arrayOfBooks } from "./data"
import Header from "./components/Header";
import Books from "./components/Books";
import Cart from "./components/Cart";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "FETCH_BOOKS", payload: {name: "", filter: "", books: arrayOfBooks}})
  }, [])
  
  return (
    <div className="App">
      <div className="MainSection">
        <Header/>
        <div className="body">
          <Books/>
        </div>
      </div>
      <div className="RightSection">
        <div className="UserData">
            {/* User details section, when implemented */}
        </div>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
