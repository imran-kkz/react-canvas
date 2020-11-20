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

    componentDidMount() { //you were just rendered - will only run once
        // do something before my app renders so that I can do things
    }

    componentWillReceiveProps() {
        // someone just gave you a gift - every single time you receive props, it will run this component
    }

    shouldComponentUpdate() {
        // making a decision if you need to change
    }

    componentWillUnmount() {
        // cleanup or teardown of components
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