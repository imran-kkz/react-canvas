import React from "react"

function JokeApp(props){
    const question = props.joke.question
    return (
        <div>
            {
                question != "" &&
                <p>
                    {props.joke.question}
                </p>
            }
            <h3>
                {props.joke.joke}
            </h3>
        </div>
    )
}

export default JokeApp