let initialState = {
  arrayOfBooks: []
}

const bookReducer = (state = initialState, action) => {
  switch (action.type){
    // From the data source (/src/data/index.js), fetch all books and apply filters to select only the books with provided name and genre
    // If name or genre is empty, whole list of books is fetched..
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
    // If more of a particular book is brought, increase the stock count of the book 
    case "INCREMENT_STOCK":
      return {
        arrayOfBooks: state.arrayOfBooks.map(book => {
          if (book.id === action.payload.id) book.stock += action.payload.count;
          return book;
        })
      }
    // If a number of a particular book is sold/removed, decrease the stock count of the book
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