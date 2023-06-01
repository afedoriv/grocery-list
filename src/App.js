import './App.css';
import { GroceryList } from './GroceryList';
import shoppingBagImage from './img/image-shopping-bag.jpg';
import shoppingAppImage from './img/image-shopping-app.jpg';

function App() {
  return (
    <div className='app container'>
      <img src={ shoppingBagImage } alt='Shopping bag' width='200px'/>
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={ shoppingAppImage } alt='Mobile App' width='200px'/>
    </div>
  );
}

export default App;