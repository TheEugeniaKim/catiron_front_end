import React from 'react'
import '../App.css';
import { Card } from 'semantic-ui-react'

function Meow(props){

    return (
        <Card className="Meow" style={{width: '100vw'}}>
            <h4>Username here</h4>
            <p>meow content here</p>
        </Card>
        
    )
}

export default Meow