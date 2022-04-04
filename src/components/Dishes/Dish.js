import { useState } from "react";
import { addItem } from "../../redux/cartSlice";
// import { quantity } from "../../redux/quantitySlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";


const Dish = ({dish}) =>{
  const dispatch=useDispatch();
  // const quantity = useSelector(state=> state.quantity.value) ;

  const [quantity, setQuantity] = useState(1)
  return(
     <div  key={dish.id}>
       <img src={`./images/${dish.img}.jpg`} width="500px" alt="dish"/>
      <p>${dish.price}</p>
      <p>{dish.name}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      <button onClick={()=>{dispatch(addItem({dish, quantity }))}}>ADD TO CART</button>
     </div>
 )

}
export default Dish;