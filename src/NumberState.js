import React from 'react'

class NumberState extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
            }
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickHalf = this.handleClickHalf.bind(this)
    }

    handleClickAdd() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }) 
    }

    handleClickHalf() {
        this.setState((prevState) => {
            return {
                count: prevState.count / 2
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClickAdd}>Add!</button>
                <button onClick={this.handleClickHalf}>Half!</button>
            </div>
        )
    }
}

export default NumberState