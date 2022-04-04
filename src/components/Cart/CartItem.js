import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
const CartItem = ({cartItem}) => {
const dispatch=useDispatch();
    return(<div>
    <p>{cartItem.name}</p>
    <p>price: ${cartItem.price}</p>
    <p>portion(s): {cartItem.quantity}</p>
    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
      alt="icon"
      onClick={()=>{ dispatch(removeItem({cartItem}))}}/> 
    </div>
    )
}

export default CartItem;