// import JokeApp from './JokeApp';
import './App.css';
import React, {Component} from 'react'
import { timeout } from 'q';
// import jokesData from './jokesData';
// import products from './productData';
// import Product from './Product'

// function App() {
//   const productsList = products.map((product)=> <Product name={product.name} key={product.id} price={product.price} description={product.description}/>)
//   return (
//   <div className="App">
//     {productsList}
  //   </div>
  //   )
  // }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      answer: "Yes"
    }
  }
  render() {
    return(
      <div>
  <h1>Is State important to know? {this.state.answer}</h1>
      </div>
    )
  }
}

// class Header extends React.Component {
//   render() {
//     return(
//       <header>
//         <p>Welcome {this.props.username}</p>
//       </header>
//     )
//   }
// }

// class Greeting extends Component {
//   render() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if (hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours > 12 && hours < 17) {
//     timeOfDay = "evening"
//   } else {
//     timeOfDay = "night"
//   }
//     return(
//       <div>
//         <h1>Good {timeOfDay} to you sir or madam!</h1>
//       </div>
//     )
//   }
// }

export default App