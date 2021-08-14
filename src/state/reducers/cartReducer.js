let initialState = {
    totalPrice: 0,
    totalAmount: 0,
    selectedBooks: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        //Add new (unique) book to the cart
        case "ADD_TO_CART":
            return {...state, 
                selectedBooks: [...state.selectedBooks, action.payload.book],
                totalAmount: state.totalAmount + 1,
                totalPrice: state.totalPrice + action.payload.book.unitPrice,
            }
        // Remove book from the cart
        case "REMOVE_FROM_CART":
            return {...state, 
                selectedBooks: state.selectedBooks.filter((book) => book !== action.payload.book),
                totalAmount: state.totalAmount - action.payload.book.amount,
                totalPrice: state.totalPrice - action.payload.book.price,
            }
        
        // If the book to add to cart already exists in cart, increase the amount (to be purchased) of that book, instead of duplicate entries 
        // Or also, if one wanted to buy more of a particular book
        case "INCREMENT_BOOK":
            return {
                ...state,
                selectedBooks: state.selectedBooks.map((book) => {
                    if (book.id === action.payload.book.id) {
                        book.amount += 1;
                        book.price += book.unitPrice;
                    }
                    return book;
                }),
                totalAmount: state.totalAmount + 1,
                totalPrice: state.totalPrice + action.payload.book.unitPrice,
            }
        // Decrease the amount of one particular book (to be purchased amount)
        case "DECREMENT_BOOK":
            return {
                ...state,
                selectedBooks: state.selectedBooks.map((book) => {
                    if (book.id === action.payload.book.id) {
                        book.amount -= 1;
                        book.price -= book.unitPrice;
                    }
                    return book;
                }),
                totalAmount: state.totalAmount - 1,
                totalPrice: state.totalPrice - action.payload.book.unitPrice,
            }
        default:
            return state;
    }
}

export default cartReducer;