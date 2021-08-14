import "./style.css"
import SearchBar from '../SearchBar';
import bookStore from "../../res/images/bookStore.svg";

const Header = () => {

  return (
      <div className="Header">
        <div className="header-container">
          <span className="logo"><img src={bookStore}/></span>
          <SearchBar/>
        </div>
      </div>
  )
}

export default Header;