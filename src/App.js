import React, {Component} from 'react'
import Condition from './Condition'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loggedIn: false
      })
    }, 1500)
  }  

  render() {
    return (
      <div>
        <Condition loggedIn={this.state.loggedIn}/>
      </div>
    )
  }
}

export default App