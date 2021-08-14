import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Icon } from '@iconify/react';
import { formattedPriceFromNPR } from "../../../../functions";

import decBtn from '@iconify/icons-bx/bxs-left-arrow';
import incBtn from "@iconify/icons-bx/bxs-right-arrow";
import closeBtn from "@iconify/icons-eva/close-circle-fill";

const SelectedBook = ({book}) => {

    const dispatch = useDispatch();

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
            <div className="selectedbookImage"><img src={book.image}/></div>
            <div className="selectedTitle">{book["name "]}</div>
            <div className="closeDiv"><Icon className="closeBtn" onClick={removeBookHandler} icon={closeBtn}/></div>
            <div className="selectedAuthor">{book.author}</div>
            <div className="selectedPrice">{formattedPriceFromNPR(book.price)}</div>
            <div className="counter">
                {
                    (book.amount > 1)?
                        <Icon className="decBtn" onClick={decrementHandler} icon={decBtn}/> : 
                        <Icon className="disabled" icon={decBtn}/>
                }
                
                <span className="count">{book.amount}</span>
                {
                    console.log(book.stock),
                    (book.amount < book.stock)?
                        <Icon className="incBtn" onClick={incrementHandler} icon={incBtn}/> : 
                        <Icon className="disabled" icon={incBtn}/>
                }
            </div>
        </div>  
    )
}

export default SelectedBook;
