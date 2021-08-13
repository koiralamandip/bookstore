let initialState = {
    totalPrice: 0,
    totalAmount: 0,
    selectedBooks: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, 
                selectedBooks: [...state.selectedBooks, action.payload.book],
                totalAmount: state.totalAmount + 1,
                totalPrice: state.totalPrice + action.payload.book.unitPrice,
            }
        
        case "REMOVE_FROM_CART":
            return {...state, 
                selectedBooks: state.selectedBooks.filter((book) => book !== action.payload.book),
                totalAmount: state.totalAmount - action.payload.book.amount,
                totalPrice: state.totalPrice - action.payload.book.price,
            }
        
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