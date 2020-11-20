import React, {Component} from 'react'
import NumberState from './NumberState'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false
  }
  }
  render() {
    return (
      <NumberState />
    )
  }
}

export default App