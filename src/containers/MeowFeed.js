import React from 'react'

import Meow from '../components/Meow'
import { Card } from 'semantic-ui-react'

class MeowFeed extends React.Component{
    render(){
        return (
            <div>
                <Card.Group>
                    {this.props.allMeows.map(meow => 
                    <Meow username={meow.username} 
                    body={meow.body} 
                    likes={meow.likes}/>)
                    }
                </Card.Group>
            </div>
        )
    }
}

export default MeowFeed