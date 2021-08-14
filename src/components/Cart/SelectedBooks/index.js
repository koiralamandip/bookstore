import { useSelector } from "react-redux";
import SelectedBook from "./SelectedBook";

const SelectedBooks = () => {
    
    //Fetching a list of selected books from the redux store 
    const selectedBooks = useSelector(state => state.cartState.selectedBooks);
    
    return (
        <div className="selected-book-container">
            {
                selectedBooks.map((book) => (
                    <SelectedBook book={book} />
                ))
            }   
        </div>
    )
}

export default SelectedBooks;