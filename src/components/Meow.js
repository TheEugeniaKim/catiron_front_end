import React from 'react'
import '../App.css';
import { Card } from 'semantic-ui-react'

function Meow(props){

    return (
        <Card className="Meow" style={{width: '100vw'}}>
            <h4>{props.username}</h4>
            <p>{props.body}</p>
        </Card>
    )
        
}

export default Meow