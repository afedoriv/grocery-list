import './App.css';
import { GroceryList } from './GroceryList';
import image from './image-one.jpg';
import imageTwo from './image-two.jpg';

function App() {
  return (
    <div className='app container'>
      <img src={image} alt='Shopping bag' width='200px'/>
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={imageTwo} alt='Mobile App' width='200px'/>
    </div>
  );
}

export default App;