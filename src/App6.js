import React, { Component } from 'react'

class App6 extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            dog: {

            }
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch("https://dog.ceo/api/breeds/list/all")
            // .then(Response => Response.json())
            .then(data => {
                this.setState({
                    dog: data,
                    loading: false
                })
            })
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <h1>API Test</h1>
                {this.state.loading === true ? <h1>Loading</h1> : null}
            </div>
        )
    }
}

export default App6