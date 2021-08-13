import { Icon } from '@iconify/react';
import "./style.css"

import bookStore from "../../res/images/bookStore.svg";
import search from '@iconify/icons-iconoir/search';
import filter from '@iconify/icons-mi/filter'

const Header = () => {
    return (
        <div className="Header">
          <div className="header-container">
            <span className="logo"><img src={bookStore}/></span>
            <div className="search-container">
              <span className="filter"><Icon icon={filter}/></span>
              <input type="text" placeholder="Search Book"/>
              <span className="search"><Icon icon={search}/></span>
            </div>
          </div>
        </div>
    )
}

export default Header;