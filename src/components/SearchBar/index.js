import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { arrayOfBooks } from '../../data';

import "./style.css";

import search from '@iconify/icons-iconoir/search';
import filter from '@iconify/icons-mi/filter';
import downArrow from "@iconify/icons-bx/bxs-down-arrow";

const SearchBar = () => {

    const dispatch = useDispatch();

    // Internal states to store the filter text for books (by NAME and by Genre), used while searching 
    const [searchText, setSearchText] = useState("");
    const [filterText, setFilterText] = useState("");

    // Flag to determine the visibility of the => Filter Box => (allows filtering book results using "Genre" tags)
    const [openFilter, setOpenFilter] = useState(false);
    
    // Handler to update the search text (by NAME) of books
    const changeHandler = (event) => {
      setSearchText(event.target.value);
    }

    // Handler to update the search text (by GENRE) of books
    const filterChangeHandler = (event) => {
        setFilterText(event.target.value);
    }

    // Handler to toggle the visibility of the Filter Box
    const filterToggle = () => {
        setOpenFilter(!openFilter);
        setFilterText("");
    }
  
    // Handler to search for book by using provided filters
    const searchHandler = () => {
      dispatch({type: "FETCH_BOOKS", payload: {name: searchText, filter: filterText,  books: arrayOfBooks}});
    }

    return (
        <div className="search-container">
            {
                // Filter Box =>
                (openFilter)? 
                    <>
                        <div className="filterBox">
                            <span>Filter by Genre</span>
                            <input type="text" placeHolder="Genre" value={filterText} onChange={filterChangeHandler}/>
                            <span className="genreTagNote">Use multiple genres separated by commaa (,)</span>
                        </div>
                        <Icon className="downArrow" icon={downArrow}/>
                    </>
                :
                ""   
                // <= Filter Box  
            }

            {/* // Default SearchBar Component */}
            <span className="filter"><Icon className={(openFilter)? "filterBtn open" : "filterBtn"} onClick={filterToggle} icon={filter}/></span>
            <input type="text" placeholder="Search Book" value={searchText} onChange={changeHandler}/>
            <span className="search"><Icon className="searchBtn" onClick={searchHandler} icon={search}/></span>
        </div>
    )
}

export default SearchBar;