import { useSelector } from "react-redux";
import "./style.css";
import SelectedBooks from './SelectedBooks';
import myCart from "../../res/images/myCart.svg";
import { formattedPriceFromNPR } from "../../functions";


const Cart = () => {

    const [amount, price] = useSelector(state => [state.cartState.totalAmount, state.cartState.totalPrice]);

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