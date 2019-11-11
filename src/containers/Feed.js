import React from 'react'
import { Card } from 'semantic-ui-react'
import Meow from '../components/Meow'

function Feed(props) {

    return (
        <div className="Feed">
            <Card.Group >
                <Meow />
            </Card.Group>
           
        </div>
    )
}

export default Feed
