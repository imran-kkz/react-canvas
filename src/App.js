// import JokeApp from './JokeApp';
import './App.css';
// import jokesData from './jokesData';
import products from './productData';
import Product from './Product'

function App() {
  const productsList = products.map((product)=> <Product name={product.name} price={product.price} description={product.description}/>)
  return (
  <div className="App">
    {productsList}
  </div>
  )
}

export default App;
