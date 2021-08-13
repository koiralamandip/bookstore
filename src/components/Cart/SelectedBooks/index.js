import { useSelector } from "react-redux";
import SelectedBook from "./SelectedBook";

const SelectedBooks = () => {
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