import './App.css';

import Header from "./components/Header";
import Books from "./components/Books";
import Cart from "./components/Cart";

function App() {
  
  return (
    <div className="App">
      <div className="MainSection">
        <Header/>
        <div className="body">
          <Books/>
        </div>
      </div>
      <div className="RightSection">
        <div className="UserData">
            {/* User details section, when implemented */}
        </div>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
