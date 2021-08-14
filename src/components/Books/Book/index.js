import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import addToCart from "@iconify/icons-iconoir/add-to-cart";
import { formattedGenre, formattedPrice, formattedDate, getNPRPlainFromUSDPrice } from '../../../functions';
const Book = ({element}) => {

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

    const addToCartHandler = () => {
        
        if (!isSelected){
            if (bookCount >= 5){
                window.alert("Sorry, we don't currently allow to select more than 5 different books");
                return;
            }
            dispatch({type: "ADD_TO_CART", payload: {
                book: {
                    ...element,
                    unitPrice: getNPRPlainFromUSDPrice(element.price),
                    price: getNPRPlainFromUSDPrice(element.price),
                    amount: 1,
                },
            }});
        }else{
            dispatch({type: "INCREMENT_BOOK", payload: {
                book: {
                    ...element,
                    unitPrice: getNPRPlainFromUSDPrice(element.price),
                    price: getNPRPlainFromUSDPrice(element.price),
                    amount: 1,
                },
            }});
        }

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