import React from 'react'

function Condition(props) {
    console.log(props.loggedIn)
    if (props.loggedIn == true){
        return(
            <h1>loading...</h1>
        )
    } else {
        return (
            <div>
                <h1>loggedIn</h1>
            </div>
        )
    }
}

export default Condition