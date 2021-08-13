import { useSelector, useDispatch } from "react-redux";

import { Icon } from '@iconify/react';
import { formattedPriceFromNPR } from "../../../../functions";

import decBtn from '@iconify/icons-bx/bxs-left-arrow';
import incBtn from "@iconify/icons-bx/bxs-right-arrow";
import closeBtn from "@iconify/icons-eva/close-circle-fill";

const SelectedBook = ({book}) => {

    const dispatch = useDispatch();

    const thisBook = useSelector((state) => {
        return (state.bookState.arrayOfBooks.filter((_book) => _book.id === book.id))[0];
    })

    const decrementHandler = () => {
        dispatch(
            {
                type: "DECREMENT_BOOK", 
                payload: {book: book}
            }
        )
        dispatch({type: "INCREMENT_STOCK", payload: {id: book.id, count: 1}});
    }

    const incrementHandler = () => {
        dispatch(
            {
                type: "INCREMENT_BOOK", 
                payload: {book: book}
            }
        )
        dispatch({type: "DECREMENT_STOCK", payload: {id: book.id, count: 1}});
    }

    const removeBookHandler = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {book: book}
        });

        dispatch({
            type: "INCREMENT_STOCK",
            payload: {
                id: book.id,
                count: book.amount,
            }
        })
    }

    return (
        <div className="selected-book">
            <div className="selectedbookImage"><img src={thisBook.image}/></div>
            <div className="selectedTitle">{thisBook["name "]}</div>
            <div className="closeDiv"><Icon className="closeBtn" onClick={removeBookHandler} icon={closeBtn}/></div>
            <div className="selectedAuthor">{thisBook.author}</div>
            <div className="selectedPrice">{formattedPriceFromNPR(book.price)}</div>
            <div className="counter">
                {
                    (book.amount > 1)?
                        <Icon className="decBtn" onClick={decrementHandler} icon={decBtn}/> : 
                        <Icon className="disabled" icon={decBtn}/>
                }
                
                <span className="count">{book.amount}</span>
                {
                    (thisBook.stock > 0)?
                        <Icon className="incBtn" onClick={incrementHandler} icon={incBtn}/> : 
                        <Icon className="disabled" icon={incBtn}/>
                }
            </div>
        </div>  
    )
}

export default SelectedBook;
