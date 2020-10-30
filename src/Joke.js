import React from "react"

function Joke(props){
    return (
        <div>
            <h3>
                Q:{props.joke.question}
            </h3>
            <p>
                A:{props.joke.joke}
            </p>
        </div>
    )
}

export default Joke