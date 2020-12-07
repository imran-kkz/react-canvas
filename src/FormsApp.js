import React, { Component } from 'react'

class FormsApp extends Component{

    constructor(){
        super()
        this.state = {
            firstName: "",
            checked: true,
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <br/>
                <input type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName} </h1>
                <br/>
                <input
                    type="checkbox"
                    value={this.state.checked}
                    name="checked"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default FormsApp