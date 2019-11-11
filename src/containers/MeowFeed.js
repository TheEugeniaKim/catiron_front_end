import React from 'react'
import Meow from '../components/Meow'

class MeowFeed extends React.Component{
    render(){
        return (
            <div>
                {this.props.allMeows.map(meow => 
                <Meow username={meow.username} 
                content={meow.content} 
                likes={meow.likes}/>)
                }
            </div>
        )
    }
}

export default MeowFeed