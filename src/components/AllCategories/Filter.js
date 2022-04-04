import {useSelector, useDispatch} from 'react-redux'
import { getSelectedCategory } from "../../redux/dishesSlice";
import { filterCategory } from '../../redux/dishesSlice';


const Filter = ({category}) => {
const selectedCategory =useSelector(getSelectedCategory)
const dispatch= useDispatch();
    return(<div>
     
     <h4 onClick={()=>{dispatch(filterCategory(category))} }
     className={selectedCategory === category ? "categoryButtonSelected" : "categoryButton"}>
     {category}
     </h4>
    </div>)
}
export default Filter