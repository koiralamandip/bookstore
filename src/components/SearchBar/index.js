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

    const [searchText, setSearchText] = useState("");
    const [filterText, setFilterText] = useState("");

    const [openFilter, setOpenFilter] = useState(false);
    
    const changeHandler = (event) => {
      setSearchText(event.target.value);
    }

    const filterChangeHandler = (event) => {
        setFilterText(event.target.value);
    }

    const filterToggle = () => {
        setOpenFilter(!openFilter);
        setFilterText("");
    }
  
    const searchHandler = () => {
      dispatch({type: "FETCH_BOOKS", payload: {name: searchText, filter: filterText,  books: arrayOfBooks}});
    }

    return (
        <div className="search-container">
            {
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
            }
            <span className="filter"><Icon className={(openFilter)? "filterBtn open" : "filterBtn"} onClick={filterToggle} icon={filter}/></span>
            <input type="text" placeholder="Search Book" value={searchText} onChange={changeHandler}/>
            <span className="search"><Icon className="searchBtn" onClick={searchHandler} icon={search}/></span>
        </div>
    )
}

export default SearchBar;