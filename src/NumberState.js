import React from 'react'

function clicked() {
    return (
        console.log("clicked!")
    )
}
class NumberState extends React.Component {
    constructor() {
    super()
    this.state = {
        count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={clicked}>Change!</button>
            </div>
        )
    }
}

export default NumberState