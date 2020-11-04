import React, {Component} from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false
  }
  }
  render() {
    if (this.state.loggedIn){
      return <h1>You are currently logged In</h1>
    }
    return <h1>You are currently logged Out</h1>
  }
}

export default App