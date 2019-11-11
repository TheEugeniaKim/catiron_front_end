import React from 'react'

const Meow = (props) => {

    return (
        <div>
            <h2>{props.username}</h2>
            <h3>{props.content}</h3>
        </div>
    )
}

export default Meow