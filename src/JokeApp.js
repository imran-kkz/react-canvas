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
            <h3 style={{textDecoration : true}}>
                {props.joke.joke}
            </h3>
            <hr></hr>
        </div>
    )
}

export default JokeApp