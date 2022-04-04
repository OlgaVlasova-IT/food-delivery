

const ChangeQuantity = ({quantity, setQuantity}) => {

return(<div>
    <button onClick={()=>{ 
        setQuantity(quantity+1)}}>+</button>
    <span> {quantity}</span>
    <button  onClick={()=>{ if (quantity>=2)
        setQuantity(quantity-1)}}>-</button>
</div>

)

}

export default ChangeQuantity;