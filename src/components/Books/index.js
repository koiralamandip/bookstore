import { useSelector } from 'react-redux';
import "./style.css"

import {arrayOfBooks} from "../../data";

import Book from "./Book";

const Books = () => {

    const bookState = useSelector((state) => state.bookState.arrayOfBooks);

    return (
        <div className="book-container">
            {
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