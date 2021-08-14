import { useSelector } from "react-redux";
import "./style.css";
import SelectedBooks from './SelectedBooks';
import myCart from "../../res/images/myCart.svg";
import { formattedPriceFromNPR } from "../../functions";


const Cart = () => {

    // Total Amount of selected books, and total price of cart items.. fetched from redux store
    const [amount, price] = useSelector(state => [state.cartState.totalAmount, state.cartState.totalPrice]);

    // Render the Cart section of the screen, with:
    // 1. Total Amount of selected Books
    // 2. Total price of Cart items
    // 3. List of selected books.. rendered using <SelectedBooks/> and <SelectedBook/> components
    return (
        <div className="Cart">
          <div className="mycart"><img src={myCart}/> <span>My Cart</span></div>
          <div className="totalAmount">Total Amount: {amount}</div>
          <div className="totalPrice">Total Price: {formattedPriceFromNPR(price)}</div>
          <SelectedBooks/>
        </div>
    )
}

export default Cart;