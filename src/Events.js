import React from 'react'

function hover() {
    return(
        console.log("I was hovered over!!")
    )
}

function clicked() {
    return(
        console.log("I was clicked!")
    )
}

function Events() {
    return(
        <div>
            <img src="http://www.fillmurray.com/g/200/300" onMouseEnter={hover}/>
            <br/>
            <br/>
            <button onClick={clicked}>Click me!</button>
        </div>
    )
}

export default Events