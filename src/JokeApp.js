import React from "react"

function JokeApp(props){
    const question = props.question
    return (
        <div>
            {
                question !== "" &&
                <p>
                    {props.question}
                </p>
            }
            <h3 style={{textDecoration : true}}>
                {props.answer}
            </h3>
            <hr></hr>
        </div>
    )
}

export default JokeApp