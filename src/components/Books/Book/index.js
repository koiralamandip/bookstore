import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import addToCart from "@iconify/icons-iconoir/add-to-cart";
import { formattedGenre, formattedPrice, formattedDate, getNPRPlainFromUSDPrice } from '../../../functions';

const Book = ({element}) => {

    // Flag to determine if this book is already added to cart 
    const [isSelected, bookCount] = useSelector((state) => {
        let length = state.cartState.selectedBooks.length;
        let selected = state.cartState.selectedBooks.filter((book) => book.id === element.id);
        if (selected.length > 0){
            return [true, length];
        }else{
            return [false, length];
        } 
    });

    const dispatch = useDispatch();

    // Handler to add this book to cart.
    // If this book is already added to cart, every successive "add to cart" will increase the count without duplicate entry
    const addToCartHandler = () => {
        
        if (!isSelected){
            // If 5 different books are already selected, display error alert and prevent additional selection of books
            if (bookCount >= 5){
                window.alert("Sorry, we don't currently allow to select more than 5 different books");
                return;
            }
            //else, add the book to cart (new)
            dispatch({type: "ADD_TO_CART", payload: {
                book: {
                    ...element,
                    unitPrice: getNPRPlainFromUSDPrice(element.price),
                    price: getNPRPlainFromUSDPrice(element.price),
                    amount: 1,
                },
            }});
        }else{
            //else, increment the amount of the selectee book (without creating duplicate entry)
            dispatch({type: "INCREMENT_BOOK", payload: {
                book: {
                    ...element,
                    unitPrice: getNPRPlainFromUSDPrice(element.price),
                    price: getNPRPlainFromUSDPrice(element.price),
                    amount: 1,
                },
            }});
        }

        // For each book selection, decrement its stock amount from the store as well.
        dispatch({type: "DECREMENT_STOCK", payload:{
            id: element.id,
            count: 1,
        }});
    }
        
    return (
        <div className="book">
            <div className="genre" title={element.genre}>{formattedGenre(element.genre)}</div>
            <img src={element.image} className="image"/>
            <span className="title">{element["name "]}</span>
            <span>Author: {element.author}</span>
            <span>Published Date: {formattedDate(element.published_date)}</span>
            {
                (element.stock > 0)? <span>Available: {element.stock}</span> : <span className="stockOut">Out of Stock</span> 
            }
            
            <div className="priceAndCart">
                <span className="price">{formattedPrice(element.price)}</span>
                { 
                    (element.stock > 0)? <Icon className="addToCart" icon={addToCart} onClick={addToCartHandler}/> : <Icon className="disabled" icon={addToCart}/>
                }
            </div>
        </div>
    )
}

export default Book;