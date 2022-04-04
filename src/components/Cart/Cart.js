import { useSelector } from "react-redux";
import { getCartItems, } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = ()=>{
const cartItems = useSelector( getCartItems);

    return(<div>
    <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart Icon"/>  
    <h3>Total: ${cartItems.reduce( (sum, cur) => sum + cur.price*cur.quantity, 0)}</h3>
    {cartItems.map(item => <CartItem  cartItem={item} key={item.dishId}/>)} 
    </div>)
}

export default Cart;