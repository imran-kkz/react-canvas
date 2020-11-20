import React, {Component} from 'react'
import Condition from './Condition'

class LearnConditional extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    render() {
        return (
            <div>
                <Condition isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default LearnConditional
