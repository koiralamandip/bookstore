import { useSelector } from 'react-redux';
import "./style.css"

import Book from "./Book";

const Books = () => {

    // Fetch the list of books from the redux store
    const bookState = useSelector((state) => state.bookState.arrayOfBooks);

    return (
        <div className="book-container">
            {
              // display each book in  a grid..  rendered using <Book/> component 
              bookState.map((element) => {
                return (
                  <Book key={element.id} element={element}/>
                )
              })
            }
          </div>
    )
}

export default Books;