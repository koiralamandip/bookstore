let initialState = {
  arrayOfBooks: []
}

const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case "FETCH_BOOKS":
      return {
        arrayOfBooks: action.payload.books.filter((book) => {
          let matchByGenre = true;
          let arrayOfGenre = action.payload.filter.split(",");
          arrayOfGenre.forEach(genre => {
            if (!book.genre.includes(genre.trim())){
              matchByGenre = false;
            }
          });
          return book["name "].includes(action.payload.name) && matchByGenre;
        })
      }
    case "INCREMENT_STOCK":
      return {
        arrayOfBooks: state.arrayOfBooks.map(book => {
          if (book.id === action.payload.id) book.stock += action.payload.count;
          return book;
        })
      }
    case "DECREMENT_STOCK":
      return {
        arrayOfBooks: state.arrayOfBooks.map(book => {
          if (book.id === action.payload.id) book.stock -= action.payload.count;
          return book;
        })
      }
    default:
      return state;
  }
}

export default bookReducer;