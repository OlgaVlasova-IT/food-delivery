
import AllCategories from './components/AllCategories/AllCategories';
import './App.css';
import Cart from './components/Cart/Cart';
import Dishes from './components/Dishes/Dishes';

function App() {
  return (
    <div className="App">
     
      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>

      <div className='block'>
      <Dishes/>
      </div>


    </div>
  );
}

export default App;
