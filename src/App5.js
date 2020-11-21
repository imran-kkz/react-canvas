import { Component } from "react"
import React from 'react'

class App5 extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    {this.state.loggedIn === false ? "Log In" : "Log Out"}
                </button>
                {this.state.loggedIn === false ? 
                <h1>user is logged out</h1> :
                <h1>user is logged in</h1>}
            </div>
        )
    }
}

export default App5