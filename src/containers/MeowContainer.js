import React from 'react'
import Feed from './Feed'
import { Header, Container, Divider, Image, Segment} from 'semantic-ui-react'



class MeowContainer extends React.Component{

    //Uses username passed down from app to greet the user
    
    //Provides user with option to logout - Logout button
    render(){
        return (
            <div>
                <Header as='h2' floated='left'> Welcome {this.props.username}! </Header>
                <button floated='right' onClick={this.props.logout}>Logout</button>
                <br/>
                <Container className='MeowFeed' >
                    <Feed />    
                </Container>
            </div>
        )
    }
}


export default MeowContainer